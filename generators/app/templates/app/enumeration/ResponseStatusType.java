package enumeration;

public enum ResponseStatusType {
    SUCCESS("success"),
    ERROR("error");

    String status;

    ResponseStatusType(String status) {
        this.status = status;
    }

    public String getValue() {
        return status;
    }
}
