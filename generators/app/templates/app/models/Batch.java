package models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import enumeration.BatchStatus;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Batch extends BaseModel {

    @Id
    private Long id;

    private BatchStatus status;

    private Timestamp startedDate;

    private Timestamp endedDate;

    @OneToMany(mappedBy = "batch") @JsonBackReference
    private List<Order> orders = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BatchStatus getStatus() {
        return status;
    }

    public void setStatus(BatchStatus status) {
        this.status = status;
    }

    public Timestamp getStartedDate() {
        return startedDate;
    }

    public void setStartedDate(Timestamp startedDate) {
        this.startedDate = startedDate;
    }

    public Timestamp getEndedDate() {
        return endedDate;
    }

    public void setEndedDate(Timestamp endedDate) {
        this.endedDate = endedDate;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    @Override
    public boolean equals(Object obj) {

        if (this == obj) return true;
        if (!(obj instanceof Batch)) return false;

        Batch batch = (Batch) obj;

        return getId().equals(batch.getId());
    }
}
