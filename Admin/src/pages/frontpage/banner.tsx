import React from "react";
import {Spin, Upload} from "antd";
import useFrontpage from "hooks/frontpage";
import {SyncOutlined} from "@ant-design/icons";

const Banner : React.FC = () => {

    const [isLoading, upload, bannerURL] = useFrontpage();

    return (
        <Spin spinning={isLoading} indicator={<SyncOutlined style={{ fontSize: 24 }} spin />}>
            <div
                className={"banner-container"}
                style={{
                    backgroundImage : `url(${bannerURL})`,
                    backgroundSize : "cover",
                    display : "flex",
                    height: "70vh",
                    borderRadius : "10px",
                    justifyContent : "center"
                }}
            >
                <div style={{height : "fit-content", padding : 50}}>
                    <Upload.Dragger
                        fileList={[]}
                        beforeUpload={upload}
                        style={{ background: "rgba(226, 226, 226, 0.50)", backdropFilter : "blur(10px)"}}
                    >
                        <div style={{padding : 20}}>
                            <p className="ant-upload-drag-icon">
                                <img width={200} src={"/images/upload-banner.svg"} alt={""} />
                            </p>
                            <p className="ant-upload-text">Klik atau seret gambar ke area ini untuk mengunggah banner.</p>
                            <p className="ant-upload-hint">
                                Gambar harus berupa file png atau svg dan memliki latar belakang yang transparan.
                            </p>
                        </div>
                    </Upload.Dragger>
                </div>
            </div>
        </Spin>
    )
}

export default React.memo(Banner);