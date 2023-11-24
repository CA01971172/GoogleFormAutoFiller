import { FormInfo, getFormData } from "../utils/fetchStorage";
import { fillInputInTheLabel } from "./fetchGoogleForm";
// import { watchForms } from "./watchGoogleForm";

// chrome.storage.localに保存されたフォームデータを、GoogleFormに入力する関数
async function main(): Promise<void>{
    const formData: FormInfo[] = await getFormData();
    formData.forEach(value => {
        fillInputInTheLabel(value.label, value.text);
    });
}

main();