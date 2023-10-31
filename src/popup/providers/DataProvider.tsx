import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { DataInfo, FormInfo, getFormData, saveFormData } from '../utils/fetchStorage';

/* Provider定義 */
type DataContextInfo = {
    formArray: FormInfo[];
    addForm(): void;
    deleteForm(index: number): void;
    rewriteForm(targetIndex: number, field: "label" | "text", newText: string,): void
    saveCurrentData(): Promise<DataInfo>
}

const initialContext: DataContextInfo = {
    formArray: [],
    addForm: () => {},
    deleteForm: () => {},
    rewriteForm: () => {},
    saveCurrentData: () => Promise.resolve({})
};

export const DataContext = createContext<DataContextInfo>(initialContext);

export function DataProvider({children}: {children: ReactNode}){
    // フォームのデータを管理するstate
    const [formArray, setFormArray] = useState<FormInfo[]>([]);

    // storageのデータを取得し、フォームのデータを初期化する
    useEffect(() => {
        getFormData().then((response: FormInfo[]) => {
            setFormArray(response);
        });
    }, []);

    // フォームを追加する関数
    function addForm(): void{
        const newTab: FormInfo = {
            label: "",
            text: ""
        };
        setFormArray(prev => [...prev, newTab]);
    }

    // フォームを削除する関数
    function deleteForm(index: number): void{
        setFormArray(prev => {
            // 新しい配列を作成し、指定したindexの要素を削除
            const newArray: FormInfo[] = [...prev];
            newArray.splice(index, 1);
            return newArray;
        });
    }

    // フォームの中身を変更する関数
    function rewriteForm(targetIndex: number, field: "label" | "text", newText: string,): void{
        setFormArray(prev => (
            prev.map((form, index) => {
                if(index === targetIndex){
                    form[field] = newText;
                }
                return form;
            })
        ))
    }


    // chrome.storageに現在のデータを保存する関数
    async function saveCurrentData(): Promise<DataInfo>{
        const result: DataInfo = await saveFormData(formArray);
        return result;
    }

    return (
        <DataContext.Provider
            value={{
                formArray,
                addForm,
                deleteForm,
                rewriteForm,
                saveCurrentData
            }}
        >
            {children}
        </DataContext.Provider>
    );
}