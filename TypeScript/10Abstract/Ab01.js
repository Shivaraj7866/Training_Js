var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    return TakePhoto;
}());
var smith = new TakePhoto("test", "Test");
console.log(smith);
