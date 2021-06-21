export type VideoProps = {
    playVideo: boolean | null,
    videoHeight: string | null,
    videoKey: string | null,
    videoOnFinish: (val: boolean) => void | null
}
