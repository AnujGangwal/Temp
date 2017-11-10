angular
    .module('app')
    .constant('ngPatternValidation', {
        REGEX: {
            ONLY_NUMBERS: /^\d+$/,
            ONLY_ALPHABET: /^[a-zA-Z\s]*$/,
            ALPHA_NUMERIC: /^[ a-zA-Z0-9]+$/,
            CODE_VALUE: /^([a-zA-Z0-9-_]+)$/,
            ID_VALUE: /^([a-zA-Z0-9_]+)$/,
            LDAP_ID_VALUE: /^([a-zA-Z0-9_.-]+)$/,
            NAME: /^([a-zA-Z0-9-%\s]+)$/,
            ONLY_FLOAT: /^[0-9]{1,7}(\.[0-9]+)?$/,
             ONLY_EMAIL: /^[a-zA-Z0-9-_]+(\.[a-zA-Z0-9-_]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-z]{2,4})$/
        }
    });
