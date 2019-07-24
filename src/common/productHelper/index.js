export const getAllProducts = (items, result = []) => {
  items.forEach(element => {
    if (!element.children) {
      result.push(element);
    } else {
      result = getAllProducts(element.children, result);
    }
  });
  return result;
};

export const getProductsByCategory = (items, category, result = []) => {
  items.forEach(element => {
    if (element.name.toLowerCase() === category.toLowerCase()) {
      result = getAllProducts(element.children);
    } else {
      if (element.children) {
        result = getProductsByCategory(element.children, category, result);
      }
    }
  });
  return result;
};

export const getProductById = (items, id, result = []) => {
  items.forEach(element => {
    if (!element.children) {
      if (element.serialNo === id) {
        result.push(element);
      }
    } else {
      result = getProductById(element.children, id, result);
    }
  });
  return result;
};

export const getExpiredProducts = (items, result = []) => {
  items.forEach(element => {
    if (!element.children) {
      const v = element.orderedDate.split("/");
      const orderedDate = new Date(
        Number(v[2]),
        Number(v[1]) - 1,
        Number(v[0])
      );

      let year = orderedDate.getFullYear();
      let month = orderedDate.getMonth();
      let day = orderedDate.getDate();
      let warrantyPeriod = 0;
      let extendedWarranty = 0;
      if (
        element.warrantyPeriod &&
        element.warrantyPeriod.indexOf("year") > -1
      ) {
        warrantyPeriod = element.warrantyPeriod.split("year")[0];
      }
      if (
        element.extendedWarranty &&
        element.extendedWarranty.indexOf("year") > -1
      ) {
        extendedWarranty = element.extendedWarranty.split("year")[0];
      }
      const eDate = new Date(
        year + Number(warrantyPeriod) + Number(extendedWarranty),
        month,
        day
      );

      if (eDate.getTime() < new Date().getTime()) {
        result.push(element);
      }
    } else {
      result = getExpiredProducts(element.children, result);
    }
  });
  return result;
};

export const getProductsExpiringSoon = (items, days, result = []) => {
  items.forEach(element => {
    if (!element.children) {
      const v = element.orderedDate.split("/");
      const orderedDate = new Date(
        Number(v[2]),
        Number(v[1]) - 1,
        Number(v[0])
      );

      let year = orderedDate.getFullYear();
      let month = orderedDate.getMonth();
      let day = orderedDate.getDate();
      let warrantyPeriod = 0;
      let extendedWarranty = 0;
      if (
        element.warrantyPeriod &&
        element.warrantyPeriod.indexOf("year") > -1
      ) {
        warrantyPeriod = element.warrantyPeriod.split("year")[0];
      }
      if (
        element.extendedWarranty &&
        element.extendedWarranty.indexOf("year") > -1
      ) {
        extendedWarranty = element.extendedWarranty.split("year")[0];
      }
      const eDate = new Date(
        year + Number(warrantyPeriod) + Number(extendedWarranty),
        month,
        day
      );
      const eDateAfter = new Date(
        year + Number(warrantyPeriod) + Number(extendedWarranty),
        month,
        day - days
      );

      if (
        eDate.getTime() > new Date().getTime() &&
        eDateAfter.getTime() <= new Date().getTime()
      ) {
        result.push(element);
      }
    } else {
      result = getProductsExpiringSoon(element.children, days, result);
    }
  });
  return result;
};

export const getProductExpiryDate = element => {
  const v = element.orderedDate.split("/");
  const orderedDate = new Date(Number(v[2]), Number(v[1]) - 1, Number(v[0]));

  let year = orderedDate.getFullYear();
  let month = orderedDate.getMonth();
  let day = orderedDate.getDate();
  let warrantyPeriod = 0;
  let extendedWarranty = 0;
  if (element.warrantyPeriod && element.warrantyPeriod.indexOf("year") > -1) {
    warrantyPeriod = element.warrantyPeriod.split("year")[0];
  }
  if (
    element.extendedWarranty &&
    element.extendedWarranty.indexOf("year") > -1
  ) {
    extendedWarranty = element.extendedWarranty.split("year")[0];
  }
  const eDate = new Date(
    year + Number(warrantyPeriod) + Number(extendedWarranty),
    month,
    day
  );
  return eDate.getDate() + "/" + eDate.getMonth() + "/" + eDate.getFullYear();
};
