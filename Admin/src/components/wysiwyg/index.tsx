import React, { useState} from "react";
import FroalaEditor from 'react-froala-wysiwyg';
import 'assets/styles/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import uploadImage from "services/upload";
import {Spin} from "antd";

interface Props {
    model : string,
    setModel : (html : string) => void
}

const Wysiwyg : React.FC<Props> = ({model, setModel}) => {

    const [isLoading, setLoading] = useState<boolean>(false);

    return (
        <Spin spinning={isLoading}>
            <FroalaEditor
                tag='textarea'
                config={{
                    imageEditButtons: ['imageReplace', 'imageAlign', 'imageRemove', '|', 'imageLink', 'linkOpen', 'linkEdit', 'linkRemove', '-', 'imageDisplay', 'imageStyle', 'imageAlt', 'imageSize'],
                    quickInsertTags : [''],
                    videoUpload : false,
                    fileUpload : false,
                    imagePaste :false,
                    height: '20vh',
                    toolbarSticky : false,
                    key : process.env.REACT_APP_FROALA_KEY,
                    events : {
                        html : { insert : (html? : string, render? : boolean) => {}},
                        'image.beforeUpload' : function (files : File[]){

                            setLoading(true);

                            let ref  = `/froala/${files[0].lastModified}_${files[0].name?.replace(/ /g, "_")}`;
                            let path = `https://storage.googleapis.com/new-etc.appspot.com${ref}`;

                            uploadImage(ref, files[0])
                                .then(() => {

                                    this.html.insert('<img alt="" src=' + path + ' />', true);
                                })
                                .finally(() => {

                                    setLoading(false);
                                })

                            // You need to set it as false, to prevent Froala uplaod.
                            return false;
                        },
                    }
                }}
                onModelChange={setModel}
                model={model}
            />
        </Spin>
    )
}

export default Wysiwyg;
