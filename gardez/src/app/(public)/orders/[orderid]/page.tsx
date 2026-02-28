// this method is used when application is server side rendered

interface paramsProps {
  params: {
    orderid: string
  },
  searchParams: {
    mode: string,
    showDisplay: string
  };
}

export default async function OrderPage(props: paramsProps) {

  const p = await props.params
  const sP = await props.searchParams

  return (
    <div>
      <h1>Order Page {sP.showDisplay}</h1>
      <h1>Order Page {sP.mode}</h1>
      <h1>Order Page {p.orderid}</h1>
    </div>
  );
}