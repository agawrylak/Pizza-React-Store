package com.agawrylak.PizzaStore.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "order_details")
@Getter
@Setter
@NoArgsConstructor
public class OrderDetails implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(name = "name")
  private String name;

  @Column(name = "surname")
  private String surname;

  @Column(name = "address")
  private String address;

  @Column(name = "phonenumber")
  private Long phoneNumber;

  @Column(name = "email")
  private String email;

  @OneToMany(mappedBy = "orderDetails", cascade = CascadeType.PERSIST)
  @OnDelete(action = OnDeleteAction.CASCADE)
  private Set<PizzaOrder> pizzaOrders = new HashSet<>();
  /*
  public void setPizzas(List<PizzaOrder> pizzaOrders) {
      for(PizzaOrder pizzaOrder : pizzaOrders){
          pizzaOrder.getPizza().getOrderDetails().add(this);
          this.pizzaOrders.add(pizzaOrder);
      }
  }

   */
}
