import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import getPastOrders from "../api/getPast.Orders";

export const Route = createLazyFileRoute("/past")({
  component: PastOrderRoute,
});

function PastOrderRoute() {
  const [page,setPage] = useState(1);
  const { isLoading, data } = useQuery({
    queryKey: ["past-orders", page ],
    queryFn: getPastOrders(page),
    staleTime: 30000,
  })
  if (isLoading) {
    return <div className="">
      
      </div>
  }
}
