import React, { useEffect } from "react";
import SweetAlert from "react-native-sweet-alert";

const Sweet = (title, subtitle, status) => {
  return SweetAlert.showAlertWithOptions({
    title: title,
    subTitle: subtitle,
    confirmButtonTitle: "OK",
    confirmButtonColor: "#000",
    otherButtonTitle: "Cancel",
    otherButtonColor: "#dedede",
    cancelButtonTitle: "cancel",
    style: status,
    cancellable: false,
  });
};

export default Sweet;
