import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Principal "mo:core/Principal";

module {
  type Order = {
    id : Nat;
    items : [Text];
    total : Nat;
    userId : Principal;
  };

  type OldActor = {};
  type NewActor = {
    orders : Map.Map<Nat, Order>;
    nextOrderId : Nat;
  };

  public func run(_old : OldActor) : NewActor {
    { orders = Map.empty<Nat, Order>(); nextOrderId = 0 };
  };
};
