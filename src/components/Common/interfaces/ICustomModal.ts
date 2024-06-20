import React from "react";

export interface ICustomModal {
    open: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    bgcolor?: string;
}