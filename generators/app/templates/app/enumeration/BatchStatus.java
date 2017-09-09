package enumeration;

public enum BatchStatus {
    IN_PROGRESS("in_progress"),
    COLLECTED("collected"),
    PACKED("packed");

    String status;

    BatchStatus(String status) {
        this.status = status;
    }

    public String getValue() {
        return status;
    }
}
