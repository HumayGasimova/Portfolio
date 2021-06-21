export type VideoProps = {
    playVideo: boolean,
    videoHeight: string,
    videoKey: string,
    videoOnFinish: (val: boolean) => {val: boolean}
}
