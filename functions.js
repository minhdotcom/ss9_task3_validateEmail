function validate_email (email) {
    var regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)$/;
    return regexp.test(email) ? true : false;
}