import * as React from 'react';
import * as GeneralTypes from '../../../reducers/generalTypes';

export type BlogReplyFormProps = {
    inputFormFieldsArray: GeneralTypes.InputForm,
    pathOfIdsToComment: Array<number>,
    fakeData: Array<GeneralTypes.BlogListStandardPageItem & CardId>,
    cardIdFromPathname: number,
    inputFieldNameBold: boolean,
    activateBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => {itemIsActive: string, itemKey: string, cardType: string},
    initInputForm: (obj: GeneralTypes.InputForm) => {obj: GeneralTypes.InputForm},
    postReply: (id: number, info: PostInfo) => void,
    postReplyFakeData: (obj: GeneralTypes.BlogListStandardPageItem & CardId) => void,
    replyComment: () => void,
    setInputFiledValueAndCheckValidation: (obj: GeneralTypes.InputForm, e: React.MouseEvent, id: number, formName?: string) => {obj: GeneralTypes.InputForm, e: React.MouseEvent, id: number, formName?: string},
}

export type CardId = {
    cardId: string
}

export type PostInfo = {
    id: number | string,
    pathOfIds: Array<number>,
    comment: string,
    fullName: string,
    email: string,
    date: string,
    website: string
}