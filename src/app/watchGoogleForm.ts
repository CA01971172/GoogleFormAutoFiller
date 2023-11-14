import { FormInfo } from "../utils/fetchStorage";

// 要素の変更を監視し、変更があれば既定のラベルに指定のテキストを入力する関数
export async function watchForms(formData: FormInfo[]): Promise<void>{
    // 監視するDOMノードを取得
    const targetNode: HTMLElement | null = document.querySelector("body");
    if(!targetNode) throw new Error("bodyが見当たりませんでした。")

    // MutationObserverオブジェクトを作成する
    const observer: MutationObserver = new MutationObserver((mutationsList, _observer) => {
        console.log({mutationsList, formData});
        // 変更が検出された際に実行されるコールバック関数
        for(const mutation of mutationsList) {
            if ((mutation.type === 'childList') && (mutation.addedNodes.length > 0)) {
                // ここに追加された要素に対する処理を記述
                const addedMessageDiv: HTMLElement = mutation.addedNodes[0] as HTMLElement;// メッセージが送信されて追加されたDiv要素を取得する

                console.log({addedMessageDiv});


                // キャラ名とロール内容が指定と一致する場合のみ、ロール結果を返す
                // observer.disconnect(); // DOMの監視を終了する
                // resolve(roleResult); // ロール結果を返してPromiseを解決する
            }
        }
    });

    // 監視オプションを設定
    const config: MutationObserverInit = {
        childList: true,
        subtree: true
    };

    // 監視を開始
    observer.observe(targetNode, config);
}