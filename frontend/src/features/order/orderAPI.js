// export function createOrder(order) {
//   return new Promise(async (resolve) => {
//     // const response = await fetch('/orders', {
//     //   method: 'POST',
//     //   body: JSON.stringify(order),
//     //   headers: { 'content-type': 'application/json' },
//     // });
//     try {
//       const response = await fetch('/order', {
//         method: 'POST',
//         body: JSON.stringify(order),
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (!response.ok) {
//         const errorData = await response.json(); // Attempt to parse the error response as JSON
//         throw new Error(`Network response was not ok. Status: ${response.status}, Message: ${response.statusText}, Error Data: ${JSON.stringify(errorData)}`);
//       }

//       const data = await response.json();
//       console.log('Response data:', data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//     // const data = await response.json();
//     // resolve({ data });
//   });
// }

// export function updateOrder(order) {
//   return new Promise(async (resolve) => {
//     const response = await fetch('/orders/' + order.id, {
//       method: 'PATCH',
//       body: JSON.stringify(order),
//       headers: { 'content-type': 'application/json' },
//     });
//     const data = await response.json();
//     resolve({ data });
//   });
// }

// export function fetchAllOrders(sort, pagination) {
//   let queryString = '';

//   for (let key in sort) {
//     queryString += `${key}=${sort[key]}&`;
//   }
//   for (let key in pagination) {
//     queryString += `${key}=${pagination[key]}&`;
//   }

//   return new Promise(async (resolve) => {
//     const response = await fetch(
//       '/orders?' + queryString
//     );
//     const data = await response.json();
//     const totalOrders = await response.headers.get('X-Total-Count');
//     resolve({ data: { orders: data, totalOrders: +totalOrders } });
//   });
// }


export function createOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch('/orders', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch('/orders/' + order.id, {
      method: 'PATCH',
      body: JSON.stringify(order),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllOrders(sort, pagination) {
  let queryString = '';

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch(
      '/orders?' + queryString
    );
    const data = await response.json();
    const totalOrders = await response.headers.get('X-Total-Count');
    resolve({ data: { orders: data, totalOrders: +totalOrders } });
  });
}