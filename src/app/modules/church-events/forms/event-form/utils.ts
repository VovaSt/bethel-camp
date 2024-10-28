import { FormGroup } from "@angular/forms";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";

export const filterPlaces = (value, places) => {
    const filterValue = value.toLowerCase();
    return places.filter(p => p.toLowerCase().includes(filterValue));
}

export const filterPreachers = (value: string, preachers: string[], form: FormGroup) => {
    const preachersList = [...preachers].filter(preacher => {
        return !form.get("preachers").value.includes(preacher);
    });
    if (!value) return preachersList.slice();
    const filterValue = value.toLowerCase();
    return preachersList.filter(p => p.toLowerCase().includes(filterValue));
}

export const addPreacherHandler = (
    event: MatChipInputEvent,
    form: FormGroup,
    preachersInputCtrl
) => {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
        const control = form.get("preachers");
        const oldValue = [...control.value];
        control.setValue([...oldValue, value]);
    }

    if (input) {
      input.value = '';
    }

    preachersInputCtrl.setValue(null);
}

export const selectedPreacherHandler = (
    event: MatAutocompleteSelectedEvent,
    form: FormGroup,
    preachersInput,
    preachersInputCtrl
) => {
    const oldValue = [...form.get("preachers").value];
    form.get("preachers").setValue([...oldValue, event.option.viewValue]);
    preachersInput.nativeElement.value = '';
    preachersInputCtrl.setValue(null);
}

export const removePreacherHandler = (
    preacher: string,
    form: FormGroup
) => {
    const oldValue = [...form.get("preachers").value];
    const index = oldValue.indexOf(preacher);
    if (index >= 0) {
        oldValue.splice(index, 1);
    }
    form.get("preachers").setValue([...oldValue]);
}
