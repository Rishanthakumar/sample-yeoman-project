package enumeration;

public enum OrderStatus {
    NEW("new"),
    IN_PROGRESS("in_progress"),
    SHIPPED("shipped"),
    COMPLETE("complete"),
    CANCELLED("cancelled");

    String status;

    OrderStatus(String status) {
        this.status = status;
    }

    public String getValue() {
        return status;
    }
}
