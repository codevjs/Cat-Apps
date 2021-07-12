import React, {createContext, Dispatch, useCallback, useEffect, useState} from "react";
import {Form} from "antd";
import {FormInstance} from "rc-field-form/lib/interface";
import {useUpload} from "hooks/upload";
import {RcFile, UploadFile} from "antd/es/upload/interface";

type ContextProps = [
    visible     : boolean,
    setVisible  : Dispatch<boolean>,
    isEdit      : boolean,
    setEdit     : React.Dispatch<boolean>,
    docId       : string | undefined,
    setDocId    : React.Dispatch<string | undefined> ,
    form        : FormInstance | any,
    fileList     : UploadFile[],
    setFileList : React.Dispatch<UploadFile[]>,
    isUploading : boolean,
    upload      : (file: RcFile, folderName : string) => boolean,
    html        : string,
    setHtml     : React.Dispatch<string>
]

export const FormContext = createContext<ContextProps>({} as ContextProps);

export const FormProvider : React.FC = (props) => {

    const [visible, setVisible]                        = useState<boolean>(false);
    const [isEdit, setEdit]                            = useState<boolean>(false);
    const [docId, setDocId]                            = useState<string | undefined>(undefined);
    const [html, setHtml]                              = useState<string>("");
    const [fileList, setFileList, isUploading, upload] = useUpload();
    const [form]                                       = Form.useForm();

    const reset = useCallback(() => {
        form.resetFields();
        setFileList([]);
        setEdit(false);
        setDocId(undefined);
        setHtml("");
    }, [form, setFileList])

    useEffect(() => {

        if (visible) reset();

    }, [visible, reset]);

    return (
        <FormContext.Provider value={[
            visible,
            setVisible,
            isEdit,
            setEdit,
            docId,
            setDocId,
            form,
            fileList,
            setFileList,
            isUploading,
            upload,
            html,
            setHtml
        ]}>
            {props.children}
        </FormContext.Provider>
    )
}
