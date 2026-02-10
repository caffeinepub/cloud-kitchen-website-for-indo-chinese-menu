# Specification

## Summary
**Goal:** Add online ordering to the cloud kitchen website with cart, checkout, and order history backed by persistent order storage.

**Planned changes:**
- Add cart functionality to the menu UI: add-to-cart from each menu item, quantity adjustments, remove items, clear cart, and display subtotal.
- Persist the cart for the current browser session (so it survives page reloads during a session).
- Add a checkout flow reachable from the cart with an order summary and a validated form (Pickup/Delivery, customer name, phone, delivery address only when Delivery is selected, optional special instructions).
- Implement backend order APIs and stable storage: create order (server-computed totals, unique order id) and list orders for the authenticated caller (Internet Identity principal), with a consistent approach for anonymous callers.
- Connect checkout to backend via existing actor/React Query patterns (mutation + loading/error states), clear cart on success, and add a “My Orders” view in site navigation that lists submitted orders (id, date/time, status at least “Placed”, item count, total).

**User-visible outcome:** Users can add menu items to a cart, review and submit an order via checkout, receive an order confirmation with an order id and timestamp, and view their past orders in a “My Orders” section.
