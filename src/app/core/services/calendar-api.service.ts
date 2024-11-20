import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CalendarEventData, CalendarEvents } from '../types/calendar.type';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorMessageComponent } from 'src/app/shared/components/error-message/error-message.component';

const apiKey = "BoMJWFGHvA5uLaZAjqcWt3OL8YC58tip5SN4uOgR";
const apiEndpoint = "https://p96qsb8ch1.execute-api.us-east-1.amazonaws.com/test";

@Injectable({
    providedIn: 'root'
})
export class CalendarApiService {

  private headers = new HttpHeaders({'x-api-key': apiKey });

  private _events$: BehaviorSubject<CalendarEvents> = new BehaviorSubject<CalendarEvents>({});
  private _isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  public isLoading$: Observable<boolean> = this._isLoading$.asObservable();
  public events$: Observable<CalendarEvents> = this._events$.asObservable();

  public fetchEvents(startDate: string, endDate: string) {
    this._isLoading$.next(true);
    this.http.get<any>(
      apiEndpoint,
      { headers: this.headers, params: { startDate, endDate } }
    )
    .pipe(catchError((err) => {
      this.showErrorMessage();
      return of(null);
    }))
    .subscribe((events: CalendarEventData[]) => {
      if (events) {
        const formattedData = {};

        events.forEach(event => {
            if (formattedData[event.date]) {
                formattedData[event.date].push(event);
            } else {
                formattedData[event.date] = [event];
            }
        });

        const newData = {...this._events$.value, ...formattedData};
        this._events$.next(newData || []);
      }
      this._isLoading$.next(false);
    });
  }

  public addNewEvent(newEvent: CalendarEventData): Observable<boolean> {
    this._isLoading$.next(true);
    return this.http.post<any>(
      apiEndpoint,
      newEvent,
      { headers: this.headers }
    ).pipe(
      catchError(() => {
        this.showErrorMessage();
        return of(null);
      }),
      map((data) => {
        this._isLoading$.next(false);
        if (data.statusCode >= 200 && data.statusCode < 300) {
          const newItem = JSON.parse(data.body).Items[0];
          const oldEvents = {...this._events$.value};
          oldEvents[newItem.date].push(newItem);
          this._events$.next(oldEvents);
          return true;
        } else {
          this.showErrorMessage();
          return false;
        }
      })
    );
  }

//   public editPerson(person: Person): Observable<boolean> {
//     this.isInnerLoading$.next(true);
//     const request = {...person} as any;
//     request.lastVisit = person.lastVisit || '';
//     return this.http.put<any>(
//       apiEndpoint,
//       request,
//       { headers: this.headers }
//     ).pipe(
//       catchError(() => of({ statusCode: 400 })),
//       map((data) => {
//         this.isInnerLoading$.next(false);
//         if (data.statusCode >= 200 && data.statusCode < 300) {
//           const visitors = this.visitors$.value;
//           const index = visitors.findIndex(p => p.id === person.id);
//           visitors[index] = person;
//           this.visitors$.next(visitors);
//           this.messageService.add({severity:'success', summary:'Збережено'});
//           return true;
//         } else {
//           this.messageService.add({severity:'error', summary:'Помилка'});
//           return false;
//         }
//       })
//     );
//   }

//   public deletePerson(id: string): Observable<boolean>  {
//     this.isInnerLoading$.next(true);
//     return this.http.delete<any>(
//       apiEndpoint,
//       {
//         headers: this.headers,
//         body: { id }
//       }
//     ).pipe(
//       catchError(() => of({ statusCode: 400 })),
//       map((data) => {
//         this.isInnerLoading$.next(false);
//         if (data.statusCode >= 200 && data.statusCode < 300) {
//           const visitors = this.visitors$.value.filter(v => v.id !== id);
//           this.visitors$.next(visitors);
//           this.messageService.add({severity:'success', summary:'Видалено'});
//           return true;
//         } else {
//           this.messageService.add({severity:'error', summary:'Помилка'});
//           return false;
//         }
//       })
//     );
//   }

  private showErrorMessage() {
    this.snackBar.openFromComponent(
      ErrorMessageComponent,
      { duration: 3000 }
    );
  }
}
