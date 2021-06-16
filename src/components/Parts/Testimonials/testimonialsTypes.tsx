import * as GeneralTypes from '../../../reducers/generalTypes'; 

export type TestimonialsProps = {
    testimonials: TestimonialsObj,
    fetchTestimonials: () => void,
    fetchTestimonialsSuccess: (array: Array<TestimonialsItemsItem>) => {array: Array<TestimonialsItemsItem>}
    setSwiperStateForHomePage: (slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean) => {slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean}
}

type TestimonialsObj = {
    error: any,
    items: Array<TestimonialsItemsItem>,
    loading: boolean,
    swiper: GeneralTypes.SwiperObj
}

type TestimonialsItemsItem = {
    author: string,
    feedback: string,
    id: number
}

export type MapStateToPropsTypes = {
    testimonials: TestimonialsObj,
}

export type MapDispatchToPropsTypes = {
    fetchTestimonials: () => void,
    fetchTestimonialsSuccess: (array: Array<TestimonialsItemsItem>) => {array: Array<TestimonialsItemsItem>}
    setSwiperStateForHomePage: (slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean) => {slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean}
}
