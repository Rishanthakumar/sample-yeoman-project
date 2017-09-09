package enumeration;

public enum ItemStatus {
    PICKED("picked"),
    NOT_PICKED("not_picked");

    String status;

    ItemStatus(String status) {
        this.status = status;
    }

    public String getValue() {
        return status;
    }
}
