

package enumeration;

public enum ErrorCodeDescription {

    MALFORMED_REQUEST("ERR001"),
    CONNECTIVITY_ERROR("ERR002"),
    INTERNAL_SERVER_ERROR("ERR003"),
    NOT_FOUND("ERR004"),
    MISSING_PERSON_ID("ERR005"),
    NO_ASSETS_AVAILABLE("ERR006"),
    INLAID_PERSEID("ERR007"),
    JSON_KEY_NOT_FOUND("ERR008");

    String value;

    ErrorCodeDescription(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}

