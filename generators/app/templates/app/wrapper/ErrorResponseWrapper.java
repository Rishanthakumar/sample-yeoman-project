package wrapper;

import enumeration.ErrorCodeDescription;
import enumeration.ResponseStatusType;

public class ErrorResponseWrapper<T> extends ResponseWrapper<T> {
    private String errorCode;

    public ErrorResponseWrapper(ErrorCodeDescription errorCode, ResponseStatusType statusType, String message, T data) {
        super(statusType, message, data);
        this.errorCode = errorCode.getValue();
    }

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }
}

