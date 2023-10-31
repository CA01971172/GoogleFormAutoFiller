/* 型定義 */
// storageから取得する、データ全体の型
type DataInfo = {
    data?: {
        forms: FormInfo[];
    };
};

// 個別タブの型
type FormInfo = {
    label: string;
    text: string;
};

/* 関数定義 */
// chrome.storageからタブのデータを取得する関数
export async function getTabData(): Promise<FormInfo[]>{
    let initialData: FormInfo[] = []; //デフォルト値
    return new Promise<FormInfo[]>((resolve, _reject) => {
        try{
            chrome.storage.local.get(["data"], function(response: DataInfo){
                try{
                    const tabs: FormInfo[] = response["data"]?.["forms"] as FormInfo[] || [];
                    resolve(tabs);
                }catch(error) {
                    // データが存在しない場合、デフォルトデータを代わりに取得する
                    resolve(initialData);
                }
            });
        }catch(error){
            // chrome.storageへアクセスできない場合のエラーハンドリング
            console.error("chrome.storageへのアクセスに失敗しました\n", error);
            resolve(initialData);
        }
    });
}

// chrome.storageに現在のデータを保存する関数
export async function saveTabData(forms: FormInfo[]): Promise<DataInfo>{
    return new Promise<DataInfo>((resolve, _reject) => {
        try{
            // chrome.storageに現在のデータを保存する
            const sendData: DataInfo = {
                data: {
                    forms
                }
            };
            chrome.storage.local.set(sendData, function() {
                resolve(sendData);
            });
        }catch(error){
            throw error;
        }
    });
}