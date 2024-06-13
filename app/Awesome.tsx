import AwesomeAlert from "react-native-awesome-alerts";

const Awesome = (title, message) => {
  <AwesomeAlert
    show={true}
    showProgress={false}
    title={title}
    message={message}
    closeOnTouchOutside={true}
    closeOnHardwareBackPress={false}
    showCancelButton={false}
    showConfirmButton={true}
    confirmText="Ok"
    confirmButtonColor="#DD6B55"
    //     onConfirmPressed={false}
  />;
};

export default Awesome;
