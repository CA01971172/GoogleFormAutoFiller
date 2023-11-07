
function clearFormValue(element: HTMLInputElement){ // フォームのinput要素等の既存の入力内容を削除する関数
    const valueLength = element.value.length;
    element.focus();
    for(let i: number = 0; i < valueLength; i++){
        document.execCommand('delete', false);
    }
}

function addFormValue(element: HTMLInputElement, value: string){ // フォームのinput要素等に内容を入力する関数
    element.focus();
    document.execCommand('insertText', false, value);
}

function overrideFormValue(element: HTMLInputElement, value: string){ // フォームのinput要素等の内容を上書きする関数
    clearFormValue(element);
    addFormValue(element, value);
}

export function fillInputInTheLabel(labelName: string, text: string){ // 特定のラベルを持つmicrosoftフォームのinput要素に内容を入力する関数
    const formBox: Element | null = document.querySelector("div.o3Dpx");
    if(!formBox) return;

    // フォームの要素を配列型で取得する
    const allForms: Element[] = Array.from(formBox.childNodes)
    .filter(node => node instanceof Element) as Element[];

    // 指定されたラベルと合致するラベルを持ったlistItemを探す
    const listItem: Element | undefined = allForms.find(value => {
        const element = value as Element;
        const span = element.querySelector("span");
        return span?.textContent === labelName;
    });

    if(listItem){
        const formInput = listItem.querySelector("input"); // 指定されたラベルと合致するラベルを持ったinput要素を取得する
        if(formInput){
            overrideFormValue(formInput, text);
        }
    }
}