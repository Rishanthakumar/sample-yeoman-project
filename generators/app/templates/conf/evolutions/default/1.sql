# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table address (
  id                        bigint auto_increment not null,
  line1                     varchar(256),
  line2                     varchar(256),
  city                      varchar(256),
  country                   varchar(256),
  created_at                datetime(6) not null,
  updated_at                datetime(6) not null,
  constraint pk_address primary key (id))
;

create table batch (
  id                        bigint auto_increment not null,
  status                    integer,
  started_date              datetime(6),
  ended_date                datetime(6),
  created_at                datetime(6) not null,
  updated_at                datetime(6) not null,
  constraint ck_batch_status check (status in (0,1,2)),
  constraint pk_batch primary key (id))
;

create table customer (
  id                        bigint auto_increment not null,
  name                      varchar(255),
  email                     varchar(255),
  billing_address_id        bigint,
  shipping_address_id       bigint,
  created_at                datetime(6) not null,
  updated_at                datetime(6) not null,
  constraint uq_customer_email unique (email),
  constraint pk_customer primary key (id))
;

create table item (
  id                        bigint auto_increment not null,
  name                      varchar(255),
  status                    integer,
  order_id                  bigint,
  created_at                datetime(6) not null,
  updated_at                datetime(6) not null,
  constraint ck_item_status check (status in (0,1)),
  constraint pk_item primary key (id))
;

create table items_order (
  id                        bigint auto_increment not null,
  order_date                datetime(6),
  status                    integer,
  batch_id                  bigint,
  customer_id               bigint,
  created_at                datetime(6) not null,
  updated_at                datetime(6) not null,
  constraint ck_items_order_status check (status in (0,1,2,3,4)),
  constraint pk_items_order primary key (id))
;

alter table customer add constraint fk_customer_billingAddress_1 foreign key (billing_address_id) references address (id) on delete restrict on update restrict;
create index ix_customer_billingAddress_1 on customer (billing_address_id);
alter table customer add constraint fk_customer_shippingAddress_2 foreign key (shipping_address_id) references address (id) on delete restrict on update restrict;
create index ix_customer_shippingAddress_2 on customer (shipping_address_id);
alter table item add constraint fk_item_order_3 foreign key (order_id) references items_order (id) on delete restrict on update restrict;
create index ix_item_order_3 on item (order_id);
alter table items_order add constraint fk_items_order_batch_4 foreign key (batch_id) references batch (id) on delete restrict on update restrict;
create index ix_items_order_batch_4 on items_order (batch_id);
alter table items_order add constraint fk_items_order_customer_5 foreign key (customer_id) references customer (id) on delete restrict on update restrict;
create index ix_items_order_customer_5 on items_order (customer_id);



# --- !Downs

SET FOREIGN_KEY_CHECKS=0;

drop table address;

drop table batch;

drop table customer;

drop table item;

drop table items_order;

SET FOREIGN_KEY_CHECKS=1;

