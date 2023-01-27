export interface ValidationMessages {
    [key: string]: (string | undefined)[];
}
export function getMessage(validationMessages: ValidationMessages | undefined, key: string) {
    if (!validationMessages) {
        return "";
    }
    const messages = validationMessages[key].filter(v => v != undefined);
    if (messages.length > 0) {
        return messages[0];
    }
    return "";
}
export function validate(validationMessages: ValidationMessages) {
    let pass = true;
    Object.keys(validationMessages).map(key => {
        if (validationMessages[key].filter(v => v != undefined).length > 0) {
            pass = false;
            return;
        }
    });
    return pass;
}

export function required(target: any, message: string) {
    if (target != undefined) {
        if (typeof target == "string") {
            if (target != "" && target != undefined && target != null) {
                return undefined;
            }
            return message;
        }
        else {
            return undefined
        }
    }
    return message;
}

export function maxLength(target: any, maxLength: number, message: string) {
    if (target == undefined) {
        return undefined;
    }
    if (typeof target == "string") {
        if (target.length > maxLength) {
            return message;
        }
        return undefined
    }
}

export function minLength(target: any, minLength: number, message: string) {
    if (target == undefined) {
        return undefined;
    }
    if (typeof target == "string") {
        if (target.length < minLength) {
            return message;
        }
        return undefined
    }
}

export function regularExpression(target: string, expression: string, message: string) {
    if (target == undefined || target == "" || target == null) {
        return undefined;
    }
    if (target.match(expression)) {
        return undefined;
    }
    return message;
}

export function maxDate(target: Date, maxDate: Date, message: string) {
    if (target == undefined) {
        return undefined;
    }
    if (target > maxDate) {
        return message;
    }
    return undefined
}

export function minDate(target: Date, minDate: Date, message: string) {
    if (target == undefined) {
        return undefined;
    }
    if (typeof target == "string") {
        if (target < minDate) {
            return message;
        }
        return undefined
    }
}