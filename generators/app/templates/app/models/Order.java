package models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import enumeration.OrderStatus;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "items_order")
public class Order extends BaseModel {

    @Id
    private Long id;

    private Timestamp orderDate;

    private OrderStatus status;

    @OneToMany(mappedBy = "order") @JsonBackReference
    private List<Item> items = new ArrayList<>();

    @ManyToOne
    private Batch batch;

    @ManyToOne
    private Customer customer;

    public Timestamp getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Timestamp orderDate) {
        this.orderDate = orderDate;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Batch getBatch() {
        return batch;
    }

    public void setBatch(Batch batch) {
        this.batch = batch;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Timestamp getDate() {
        return orderDate;
    }

    public void setDate(Timestamp date) {
        this.orderDate = date;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    @Override
    public boolean equals(Object obj) {

        if (this == obj) return true;
        if (!(obj instanceof Order)) return false;

        Order order = (Order) obj;

        return getId().equals(order.getId());
    }
}
