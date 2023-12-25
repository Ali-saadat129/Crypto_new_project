import React from "react";

export default function Privacy() {
  return (
    <div className="text-white w-full h-full p-5  ">
      <div className="flex border-b pb-5 pt-5">
        <div className="flex-1  md:text-5xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={window.screen.width < 800 ? 50 : 100}
            height={window.screen.width < 800 ? 50 : 100}
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
        </div>
        <div className="flex-3">
          <h1 className="text-xl md:text-3xl"> Account Privacy</h1>
          <p className="text-sm md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            dolorum perspiciatis eligendi quam veniam similique nemo quidem
            repudiandae? Deserunt, vero.
          </p>
        </div>
      </div>

      <div className="flex border-b pb-5 pt-5">
        <div className="flex-1  md:text-5xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={window.screen.width < 800 ? 50 : 100}
            height={window.screen.width < 800 ? 50 : 100}
            fill="currentColor"
            class="bi bi-key-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
          </svg>
        </div>
        <div className="flex-3">
          <h1 className="text-xl md:text-3xl"> Change the password</h1>
          <p className="text-sm md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste rerum,
            minima doloremque facere adipisci dolores consequatur optio
            recusandae quisquam, aspernatur temporibus vitae veniam magnam.
          </p>
        </div>
      </div>

      <div className="flex border-b pb-5 pt-5">
        <div className="flex-1  md:text-5xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={window.screen.width < 800 ? 50 : 100}
            height={window.screen.width < 800 ? 50 : 100}
            fill="currentColor"
            class="bi bi-download"
            viewBox="0 0 16 16"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
          </svg>
        </div>
        <div className="flex-3">
          <h1 className="text-xl md:text-3xl"> Download the archive of data</h1>
          <p className="text-sm md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            cum porro, animi recusandae molestias consequuntur voluptatibus,
            cupiditate hic dolor molestiae eos maiores pariatur voluptatem
            deleniti reprehenderit id et dignissimos. Quia reiciendis dolorum
            deleniti deserunt quidem magni repellendus, repudiandae eius
            laboriosam!
          </p>
        </div>
      </div>

      <div className="flex border-b pb-5 pt-5">
        <div className="flex-1  md:text-5xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={window.screen.width < 800 ? 50 : 100}
            height={window.screen.width < 800 ? 50 : 100}
            fill="currentColor"
            class="bi bi-heartbreak"
            viewBox="0 0 16 16"
          >
            <path d="M8.867 14.41c13.308-9.322 4.79-16.563.064-13.824L7 3l1.5 4-2 3L8 15a38.094 38.094 0 0 0 .867-.59m-.303-1.01-.971-3.237 1.74-2.608a1 1 0 0 0 .103-.906l-1.3-3.468 1.45-1.813c1.861-.948 4.446.002 5.197 2.11.691 1.94-.055 5.521-6.219 9.922Zm-1.25 1.137a36.027 36.027 0 0 1-1.522-1.116C-5.077 4.97 1.842-1.472 6.454.293c.314.12.618.279.904.477L5.5 3 7 7l-1.5 3 1.815 4.537Zm-2.3-3.06-.442-1.106a1 1 0 0 1 .034-.818l1.305-2.61L4.564 3.35a1 1 0 0 1 .168-.991l1.032-1.24c-1.688-.449-3.7.398-4.456 2.128-.711 1.627-.413 4.55 3.706 8.229Z" />
          </svg>
        </div>
        <div className="flex-3">
          <h1 className="text-xl md:text-3xl"> Deactivate your account </h1>
          <p className="text-sm md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            dolorum perspiciatis eligendi quam veniam similique nemo quidem
            repudiandae? Deserunt, vero.
          </p>
        </div>
      </div>

      <div className="flex border-b pb-5 pt-5 bg-red">
        <div className="flex-1  md:text-5xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={window.screen.width < 800 ? 50 : 100}
            height={window.screen.width < 800 ? 50 : 100}
            fill="currentColor"
            class="bi bi-exclamation-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
          </svg>
        </div>
        <div className="flex-3">
          <h1 className="text-xl md:text-3xl"> Teams has moved</h1>
          <p className="text-sm md:text-xl">
            We moved the Teams feature to Delegate in your security and account
            access settings. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sint tenetur deleniti iusto fuga voluptatibus molestias fugit
            eaque vero accusantium? Nemo?
          </p>
        </div>
      </div>

      <div className="flex  pb-5 pt-5">
        <div className="flex-1  md:text-5xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={window.screen.width < 800 ? 50 : 100}
            height={window.screen.width < 800 ? 50 : 100}
            fill="currentColor"
            class="bi bi-wechat"
            viewBox="0 0 16 16"
          >
            <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356" />
            <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0" />
          </svg>
        </div>
        <div className="flex-3">
          <h1 className="text-xl md:text-3xl"> Teams</h1>
          <p className="text-sm md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            fugit molestiae beatae saepe veritatis quia optio praesentium, est
            deleniti quasi inventore labore doloribus asperiores perferendis
            velit placeat blanditiis sit. Voluptatum vero iusto vitae distinctio
            aspernatur hic reprehenderit beatae ab laboriosam est nobis in rem
            quia tenetur nemo, obcaecati minima architecto.
          </p>
        </div>
      </div>
    </div>
  );
}
