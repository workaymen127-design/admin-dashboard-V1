/* =====================================
   SAMPLE USERS DATA
===================================== */

const users = [
{
    name:"John Doe",
    email:"john@example.com",
    role:"Admin",
    status:"Active",
    joined:"2026-01-15"
},
{
    name:"Sarah Wilson",
    email:"sarah@example.com",
    role:"Manager",
    status:"Active",
    joined:"2026-02-03"
},
{
    name:"Michael Brown",
    email:"michael@example.com",
    role:"User",
    status:"Inactive",
    joined:"2026-03-11"
},
{
    name:"Emma Davis",
    email:"emma@example.com",
    role:"User",
    status:"Pending",
    joined:"2026-01-22"
},
{
    name:"Daniel Miller",
    email:"daniel@example.com",
    role:"Manager",
    status:"Active",
    joined:"2026-04-08"
},
{
    name:"Sophia Moore",
    email:"sophia@example.com",
    role:"User",
    status:"Active",
    joined:"2026-04-12"
},
{
    name:"James Taylor",
    email:"james@example.com",
    role:"User",
    status:"Inactive",
    joined:"2026-02-28"
},
{
    name:"Olivia Thomas",
    email:"olivia@example.com",
    role:"Admin",
    status:"Active",
    joined:"2026-05-04"
},
{
    name:"Benjamin White",
    email:"ben@example.com",
    role:"User",
    status:"Pending",
    joined:"2026-05-10"
},
{
    name:"Ava Harris",
    email:"ava@example.com",
    role:"Manager",
    status:"Active",
    joined:"2026-03-30"
},
{
    name:"William Martin",
    email:"william@example.com",
    role:"User",
    status:"Active",
    joined:"2026-04-14"
},
{
    name:"Charlotte Thompson",
    email:"charlotte@example.com",
    role:"User",
    status:"Inactive",
    joined:"2026-01-10"
},
{
    name:"Lucas Garcia",
    email:"lucas@example.com",
    role:"Manager",
    status:"Active",
    joined:"2026-02-21"
},
{
    name:"Mia Martinez",
    email:"mia@example.com",
    role:"User",
    status:"Pending",
    joined:"2026-05-02"
},
{
    name:"Henry Robinson",
    email:"henry@example.com",
    role:"User",
    status:"Active",
    joined:"2026-03-18"
},
{
    name:"Amelia Clark",
    email:"amelia@example.com",
    role:"Admin",
    status:"Active",
    joined:"2026-04-19"
},
{
    name:"Alexander Lewis",
    email:"alex@example.com",
    role:"User",
    status:"Inactive",
    joined:"2026-01-07"
},
{
    name:"Evelyn Lee",
    email:"evelyn@example.com",
    role:"User",
    status:"Active",
    joined:"2026-05-11"
},
{
    name:"Jack Walker",
    email:"jack@example.com",
    role:"Manager",
    status:"Pending",
    joined:"2026-02-25"
},
{
    name:"Harper Hall",
    email:"harper@example.com",
    role:"User",
    status:"Active",
    joined:"2026-03-01"
},
{
    name:"David Allen",
    email:"david@example.com",
    role:"User",
    status:"Inactive",
    joined:"2026-04-06"
},
{
    name:"Ella Young",
    email:"ella@example.com",
    role:"Admin",
    status:"Active",
    joined:"2026-05-20"
},
{
    name:"Matthew King",
    email:"matthew@example.com",
    role:"User",
    status:"Pending",
    joined:"2026-03-12"
},
{
    name:"Scarlett Wright",
    email:"scarlett@example.com",
    role:"Manager",
    status:"Active",
    joined:"2026-04-09"
},
{
    name:"Joseph Scott",
    email:"joseph@example.com",
    role:"User",
    status:"Active",
    joined:"2026-02-17"
}
];

/* =====================================
   DOM ELEMENTS
===================================== */

const tableBody =
document.getElementById("tableBody");

const pagination =
document.getElementById("pagination");

const searchInput =
document.getElementById("searchUser");

/* =====================================
   SETTINGS
===================================== */

const rowsPerPage = 5;

let currentPage = 1;

let filteredUsers = [...users];

/* =====================================
   RENDER TABLE
===================================== */

function renderTable(){

    if(!tableBody) return;

    tableBody.innerHTML = "";

    const start =
    (currentPage - 1) * rowsPerPage;

    const end =
    start + rowsPerPage;

    const usersToShow =
    filteredUsers.slice(start,end);

    usersToShow.forEach((user,index)=>{

        const row =
        document.createElement("tr");

        const avatar =
        `https://i.pravatar.cc/150?img=${(start+index+1)%70}`;

        const statusClass =
        user.status.toLowerCase();

        row.innerHTML = `
        <td>
            <div class="user-info">
                <img
                src="${avatar}"
                class="user-avatar"
                alt="${user.name}">
                <span class="user-name">
                    ${user.name}
                </span>
            </div>
        </td>

        <td>${user.email}</td>

        <td>${user.role}</td>

        <td>
            <span class="status ${statusClass}">
                ${user.status}
            </span>
        </td>

        <td>${user.joined}</td>

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

        tableBody.appendChild(row);

    });

}

/* =====================================
   PAGINATION
===================================== */

function renderPagination(){

    if(!pagination) return;

    pagination.innerHTML = "";

    const pageCount =
    Math.ceil(
        filteredUsers.length /
        rowsPerPage
    );

    const prevBtn =
    document.createElement("button");

    prevBtn.textContent = "Prev";

    prevBtn.disabled =
    currentPage === 1;

    prevBtn.addEventListener("click",()=>{

        if(currentPage > 1){

            currentPage--;

            renderTable();
            renderPagination();

        }

    });

    pagination.appendChild(prevBtn);

    for(let i=1;i<=pageCount;i++){

        const btn =
        document.createElement("button");

        btn.textContent = i;

        if(i === currentPage){

            btn.classList.add("active");

        }

        btn.addEventListener("click",()=>{

            currentPage = i;

            renderTable();
            renderPagination();

        });

        pagination.appendChild(btn);

    }

    const nextBtn =
    document.createElement("button");

    nextBtn.textContent = "Next";

    nextBtn.disabled =
    currentPage === pageCount;

    nextBtn.addEventListener("click",()=>{

        if(currentPage < pageCount){

            currentPage++;

            renderTable();
            renderPagination();

        }

    });

    pagination.appendChild(nextBtn);

}

/* =====================================
   SEARCH
===================================== */

if(searchInput){

    searchInput.addEventListener("keyup",(e)=>{

        const term =
        e.target.value.toLowerCase();

        filteredUsers =
        users.filter(user =>

            user.name
            .toLowerCase()
            .includes(term)

            ||

            user.email
            .toLowerCase()
            .includes(term)

            ||

            user.role
            .toLowerCase()
            .includes(term)
        );

        currentPage = 1;

        renderTable();
        renderPagination();

    });

}

/* =====================================
   INIT
===================================== */

renderTable();
renderPagination();

/* =====================================
   DEBUG
===================================== */

console.log(
    "%cUsers Page Loaded",
    "color:#3b82f6;font-weight:bold;"
);