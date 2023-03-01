import React, { PropsWithChildren, useState } from 'react'
import { Alert, Modal, Pressable, View } from 'react-native'
interface LayoutModalProps extends PropsWithChildren {
    visible: boolean;
    onClose: () => void;
    closeOverlay?: boolean;
}
function LayoutModal(props: LayoutModalProps) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
            onRequestClose={props.onClose}>
            <Pressable style={{ width: "100%", height: "100%" }} onPress={() => props.closeOverlay && props.onClose()}   >
                {props.children}
            </Pressable>
        </Modal>
    )
}

export default LayoutModal