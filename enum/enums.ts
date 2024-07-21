enum TypeAcess {
    CUSTOMER = "C",
    SHOPMAN = "S",
}

enum KeysStorage {
    LOGIN = "login",
    DELIVERY = "delivery",
    STORE = "store",
    STOREID = "storeId",
    TYPEACESS = "typeAcess",
    CUSTOMER = "customer",
    SHOPMAN = "shopman",
}

enum Messages {
    FUNCTIONALITY_NOT_IMPLEMENTED = "Funcionalidade ainda não implementada. Aguarde futuras atualizações, qualquer dúvida entre em contato com o suporte.",
    INVALID_LOGIN_FIELDS = "Todos os campos são obrigatórios.",
    UNEXPECTED_ERROR = "Ocorreu um erro inesperado. Tente novamente mais tarde.",
    INVALID_PASSWORD_CONFIRM_PASSWORD = "Senha e confirmação de senha não conferem.",
    SUCCESS_REGISTER = "Cadastro realizado com sucesso. Você será redirecionado a tela de login.",
    REDIRECT_ERROR = "Houve um problema, vamos redirecioná-lo ao login.",
}

enum Filter {
    ALL = "Todos",
    FOODS = "Alimentos",
    DRINKS = "Bebidas",
}

export { Filter, KeysStorage, Messages, TypeAcess };
