/* =====================================
   SAMPLE ORDERS DATA
===================================== */

const orders = [
{ id:"#1001", customer:"John Doe", date:"2026-06-01", amount:"$249", payment:"Card", status:"Completed" },
{ id:"#1002", customer:"Sarah Wilson", date:"2026-06-02", amount:"$89", payment:"PayPal", status:"Pending" },
{ id:"#1003", customer:"Michael Brown", date:"2026-06-03", amount:"$520", payment:"Card", status:"Processing" },
{ id:"#1004", customer:"Emma Davis", date:"2026-06-04", amount:"$135", payment:"Bank", status:"Completed" },
{ id:"#1005", customer:"Daniel Miller", date:"2026-06-05", amount:"$72", payment:"Card", status:"Cancelled" },
{ id:"#1006", customer:"Sophia Moore", date:"2026-06-06", amount:"$430", payment:"PayPal", status:"Completed" },
{ id:"#1007", customer:"James Taylor", date:"2026-06-07", amount:"$199", payment:"Card", status:"Refunded" },
{ id:"#1008", customer:"Olivia Thomas", date:"2026-06-08", amount:"$890", payment:"Bank", status:"Completed" },
{ id:"#1009", customer:"Benjamin White", date:"2026-06-09", amount:"$59", payment:"Card", status:"Pending" },
{ id:"#1010", customer:"Ava Harris", date:"2026-06-10", amount:"$315", payment:"PayPal", status:"Processing" },
{ id:"#1011", customer:"William Martin", date:"2026-06-11", amount:"$120", payment:"Card", status:"Completed" },
{ id:"#1012", customer:"Charlotte Thompson", date:"2026-06-12", amount:"$660", payment:"Bank", status:"Completed" },
{ id:"#1013", customer:"Lucas Garcia", date:"2026-06-13", amount:"$75", payment:"Card", status:"Cancelled" },
{ id:"#1014", customer:"Mia Martinez", date:"2026-06-14", amount:"$410", payment:"PayPal", status:"Completed" },
{ id:"#1015", customer:"Henry Robinson", date:"2026-06-15", amount:"$185", payment:"Card", status:"Pending" },
{ id:"#1016", customer:"Amelia Clark", date:"2026-06-16", amount:"$980", payment:"Bank", status:"Completed" },
{ id:"#1017", customer:"Alexander Lewis", date:"2026-06-17", amount:"$245", payment:"Card", status:"Processing" },
{ id:"#1018", customer:"Evelyn Lee", date:"2026-06-18", amount:"$110", payment:"PayPal", status:"Completed" },
{ id:"#1019", customer:"Jack Walker", date:"2026-06-19", amount:"$355", payment:"Card", status:"Refunded" },
{ id:"#1020", customer:"Harper Hall", date:"2026-06-20", amount:"$90", payment:"Bank", status:"Completed" },
{ id:"#1021", customer:"David Allen", date:"2026-06-21", amount:"$470", payment:"Card", status:"Pending" },
{ id:"#1022", customer:"Ella Young", date:"2026-06-22", amount:"$320", payment:"PayPal", status:"Completed" },
{ id:"#1023", customer:"Matthew King", date:"2026-06-23", amount:"$150", payment:"Card", status:"Processing" },
{ id:"#1024", customer:"Scarlett Wright", date:"2026-06-24", amount:"$740", payment:"Bank", status:"Completed" },
{ id:"#1025", customer:"Joseph Scott", date:"2026-06-25", amount:"$95", payment:"Card", status:"Cancelled" },
{ id:"#1026", customer:"Noah Green", date:"2026-06-26", amount:"$265", payment:"PayPal", status:"Completed" },
{ id:"#1027", customer:"Grace Adams", date:"2026-06-27", amount:"$510", payment:"Card", status:"Pending" },
{ id:"#1028", customer:"Liam Nelson", date:"2026-06-28", amount:"$175", payment:"Bank", status:"Completed" },
{ id:"#1029", customer:"Chloe Carter", date:"2026-06-29", amount:"$690", payment:"Card", status:"Refunded" },
{ id:"#1030", customer:"Ryan Mitchell", date:"2026-06-30", amount:"$205", payment:"PayPal", status:"Completed" }
];

/* =====================================
   DOM ELEMENTS
===================================== */

const ordersBody = document.getElementById("ordersBody");
const ordersPagination = document.getElementById("ordersPagination");
const searchOrders = document.getElementById("searchOrders");
const exportBtn = document.querySelector(".export-btn");

/* =====================================
   SETTINGS
===================================== */

const rowsPerPage = 5;
let currentPage = 1;
let filteredOrders = [...orders];

/* =====================================
   RENDER TABLE
===================================== */

function renderOrders(){

    if(!ordersBody) return;

    ordersBody.innerHTML = "";

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    const visibleOrders =
    filteredOrders.slice(start,end);

    visibleOrders.forEach(order => {

        const statusClass =
        order.status.toLowerCase();

        const row =
        document.createElement("tr");

        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.date}</td>
            <td>${order.amount}</td>
            <td>${order.payment}</td>

            <td>
                <span class="order-status ${statusClass}">
                    ${order.status}
                </span>
            </td>

            <td>
                <div class="actions">

                    <button class="action-btn view-btn">
                        <i class="fa-solid fa-eye"></i>
                    </button>

                    <button class="action-btn edit-btn">
                        <i class="fa-solid fa-pen"></i>
                    </button>

                    <button class="action-btn delete-btn">
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>
            </td>
        `;

        ordersBody.appendChild(row);

    });

}

/* =====================================
   PAGINATION
===================================== */

function renderPagination(){

    if(!ordersPagination) return;

    ordersPagination.innerHTML = "";

    const pageCount =
    Math.ceil(
        filteredOrders.length /
        rowsPerPage
    );

    for(let i=1;i<=pageCount;i++){

        const btn =
        document.createElement("button");

        btn.textContent = i;

        if(i === currentPage){

            btn.classList.add("active");
        }

        btn.addEventListener("click",()=>{

            currentPage = i;

            renderOrders();
            renderPagination();

        });

        ordersPagination.appendChild(btn);

    }

}

/* =====================================
   SEARCH
===================================== */

if(searchOrders){

    searchOrders.addEventListener("keyup",(e)=>{

        const term =
        e.target.value.toLowerCase();

        filteredOrders =
        orders.filter(order =>

            order.id.toLowerCase().includes(term)

            ||

            order.customer
            .toLowerCase()
            .includes(term)

            ||

            order.status
            .toLowerCase()
            .includes(term)

        );

        currentPage = 1;

        renderOrders();
        renderPagination();

    });

}

/* =====================================
   CSV EXPORT
===================================== */

if(exportBtn){

    exportBtn.addEventListener("click", () => {

        let csv =
        "Order ID,Customer,Date,Amount,Payment,Status\n";

        filteredOrders.forEach(order => {

            csv +=
            `${order.id},${order.customer},${order.date},${order.amount},${order.payment},${order.status}\n`;

        });

        const blob =
        new Blob(
            [csv],
            { type:"text/csv" }
        );

        const url =
        URL.createObjectURL(blob);

        const a =
        document.createElement("a");

        a.href = url;

        a.download = "orders.csv";

        a.click();

        URL.revokeObjectURL(url);

    });

}

/* =====================================
   INIT
===================================== */

renderOrders();
renderPagination();

/* =====================================
   DEBUG
===================================== */

console.log(
    "%cOrders Page Loaded",
    "color:#10b981;font-weight:bold;"
);