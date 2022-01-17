import LocalizedStrings from "react-localization";


export enum Language {
    Russian = 'ru',
}

export const strings = new LocalizedStrings({
    "ru": {
        header:{
            phone:"Подтверждение телефона",
            email:"Подтверждение почты",
            chatList:{
                logo:"VSChat",
                version:"v0.4",
            },
            loginReg:"VSChat",
        },
        screens:{
            chatListScreen:{
                modal:{
                    delete:"Удалить",
                    mute:"Отключить звук",
                    unMute:"Включить звук",
                    anchor:"Закрепить",
                    unAnchor:"Отменить закрепление",
                    goOut:"Выйти из чата",
                },
            },
            verificationEmail:{
                enterEmail:"Введите почту",
                verication:"Подтверждение",
                textTimer:"Почта Ваша! Подождите {0} секунд...",
                placeholderInputEmail:"Введите почту",
            },
            verificationPhone:{
                enterPhone:"Введите телефон",
                verication:"Подтверждение",
                textTimer:"Телефон Ваш! Подождите {0} секунд...",
                placeholderInputPhone:"Введите телефон",
            },
            profile:{
                profileItemText:{
                    about:{
                        titleText:"О себе",
                        description:"Нажмите для изменения описания"
                    },
                    name:{
                        titleText:"Имя",
                        description:"Нажмите для изменения имени"
                    },
                    email:{
                        titleText:"Почта",
                        description:"Нажмите для изменения электронной почты"
                    },
                    phone:{
                        titleText:"Телефон",
                        description:"Нажмите для изменения телефона"
                    },
                    photo:{
                        titleText:"Фото Профиля",
                        textI:"Загрузка фото профиля",
                        description:"Нажмите для того что бы видели с кем общаются"
                    }
                },
                RBS:{
                    ChangeRBSheet:{
                        textButtonSave:"Сохранить",
                        textButtonClose:"Отменить",
                        aboutPlaceholderInput:"Расскажите о себе",
                        namePlaceholderInput:"Напишите своё имя",
                    },
                    RBSComponents:{
                        upploadPhoto:"Загрузить из галереи",
                        makePhoto:"Загрузить из Камеры",
                        close:"Закрыть",
                    }
                },
                DropDownPickerPplaceholder:"Выберите цвет"
            },
            searchScreen:{
                placeholder:"Введите ник пользователя...",
                searchButton:"Поиск",
            },
            otherProfile:{
                profileItemText:{
                    about:"О себе",
                    name:"Имя",
                    email:"Почта",
                    phone:"Телефон",
                    send:"Написать"
                },
            },
        }
}
});