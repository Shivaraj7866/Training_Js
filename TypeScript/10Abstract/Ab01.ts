abstract class TakePhoto{

    constructor(
        public cameraMode:string,
        public filter:string
    ){ }

   abstract getSemia(): void
   getReelTime():number{
        return 10 ;
   }
}

class Instagram extends TakePhoto{
    public isPhotoClicked: boolean =true

    constructor(
        public cameraMode:string,
        public filter:string,
        public burst : number
        ){
            super(cameraMode,filter)
        }

        getSemia(): void {
            console.log("get semia")
        }
}

const smith=new Instagram("test","Test",5)

console.log(smith)

console.log(smith.getReelTime())