package models;

import com.avaje.ebean.Model;
import com.avaje.ebean.annotation.CreatedTimestamp;
import com.avaje.ebean.annotation.UpdatedTimestamp;

import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import java.sql.Date;
import java.sql.Timestamp;

@MappedSuperclass
public class BaseModel extends Model {

    @CreatedTimestamp
    private Timestamp createdAt;

    @UpdatedTimestamp
    private Timestamp updatedAt;

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    public Timestamp getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Timestamp updatedAt) {
        this.updatedAt = updatedAt;
    }

    @PrePersist
    void createdAt() {
        this.createdAt = this.updatedAt = new Timestamp(System.currentTimeMillis());
    }

    @PreUpdate
    void updatedAt() {
        this.updatedAt = new Timestamp(System.currentTimeMillis());
    }
}
