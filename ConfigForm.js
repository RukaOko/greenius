const ConfigForm = {
    elements: {
        lastName: {
            type: 'input',
            title: 'Фамилия',
            action: 'onChange',
            validation: {
                required: 'Обязательное поле'
            }
        },
        firstName: {
            type: 'input',
            title: 'Имя',
            validation: {
                required: 'Имя не может быть пустым'
            }
        },
        fatherName: {
            type: 'input',
            title: 'Отчество'
        },
        login: {
            type: 'input',
            title: 'Логин',
            validation: {
                required: 'Логин не может быть пустым',
                reg: [
                    {
                        expression: /^(\w+)$/,
                        error: 'Недопустимые символы'
                    },
                    {
                        expression: /^(\w+){3,}$/,
                        error: 'Очень короткий логин'
                    }
                ]
            }
        },
        email: {
            type: 'input',
            title: 'E-mail',
            properties: {
                keyboardType: 'email-address'
            },
            validation: {
                required: 'Обязательное поле',
                reg: [
                    {
                        expression: /\S+@\S+\.\S+/,
                        error: 'Некорректный E-mail адрес'
                    }
                ]
            }
        },
        phone: {
            type: 'input',
            title: 'Телефон',
            properties: {
                keyboardType: 'phone-pad'
            },
            validation: {
                reg: [
                    {
                        expression: /^((\+?7|8)[ \-]?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$/,
                        error: 'Некорректный телефон'
                    }
                ]
            }
        },
        photo: {
            type: 'imagePicker',
            title: 'Фотография',
            widthRatio: 960, //разрешение по ширине
            button: {
                titleStart: 'Загрузить',
                titleChange: 'Изменить'
            }
        },
        button: {
            type: 'submit',
            buttonTitle: 'Обновить данные'
        }
         /*
        select: {
            type: 'picker',
            title: 'Лист',
            action: 'onChange',
            listItems: [{label: 'none', value: 'none'}, {label: '222', value: '333'}]
        },
        checkbox: {
            type: 'switch',
            title: 'Переключатель',
            action: 'onChange'
        },
        textArea: {
            type: 'input',
            title: 'Write something',
            hint: 'hint: whatever you want',
            properties: {
                multiline: true,
                numberOfLines: 4
            }
        },
        */
    },
    formContainer: {
        viewType: 'ScrollView', // || 'View'
        title: 'Личный кабинет',
        /*
        description: 'Здесь вы можете изменить свои данные',
        //elements: ['formElement1', 'formElement2'],
        containers: {
            firstContainer: {
                viewType: 'View',
                elements: ['formElement1', 'formElement2']
            },
            secondContainer: {
                viewType: 'ScrollView',
                containers: {
                    thirdContainer: {
                        viewType: 'View',
                        elements: ['formElement3', 'formElement4']
                    },
                    fourthContainer: {
                        viewType: 'View',
                        elements: ['formElement5', 'formElement6']
                    }
                }
            }
        }
        */
    },
    formData: {
        lastName: 'Фамилов',
        firstName: 'Имян',
        fatherName: 'Отцович',
        login: 'mylogin',
        email: 'mail@mail.ru',
        phone: '+7(495)777-77-77',
        photo: ''
    },
    styles: {
        containers: {},
        allElements: {
            imagePicker: {
                img: {
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    alignSelf: 'center'
                },
                touchableOpacity: {
                    borderRadius: 5,
                    backgroundColor: 'grey',
                    alignSelf: 'center',
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    marginRight: 50,
                    marginVertical: 5
                },
                buttonTitle: {
                    fontSize: 18,
                    color: 'white'
                }
            }
        },
        nameElements: {}
    }
};
export default ConfigForm;