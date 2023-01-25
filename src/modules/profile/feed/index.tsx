import { TiMessages } from "react-icons/ti";
import { IoArrowRedoOutline } from "react-icons/io5";
import { BiBookReader } from "react-icons/bi";
import { FaRegHeart, FaUniversity } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

export const ProfileFeed = () => {
  return (
    <div className="grid grid-cols-[2fr_1fr] gap-8">
      {/* left */}
      <div>
        {/* card */}
        <div className="border rounded p-5 pb-0 mb-5">
          <div className="flex items-center justify-between mb-4">
            <div className="grid grid-cols-[46px_1fr] gap-6">
              <div className="border rounded-full flex items-center justify-center p-1">
                <img
                  src="/temp/logo-unisearch.webp"
                  alt="Campaign unisearch"
                  title="Campaign unisearch"
                />
              </div>
              <div>
                <div className="font-semibold text-black">Unisearch</div>
                <div className="text-sm">Yestarday at 5:06 PM</div>
              </div>
            </div>
            <div className="">
              <button className="p-2">
                <ReactSVG src="/icons/dots.svg" />
              </button>
            </div>
          </div>
          <div className="mb-5 text-sm">
            Outlines keep you honest. They stop you from indulging in poorly
            thought-out metaphors about driving and keep you focused on the
            overall structure of your post
          </div>

          <div className="flex items-center gap-4 mb-5">
            <button type="button" className="flex items-center gap-2">
              <FaRegHeart />
              <span className="text-sm">25</span>
            </button>
            <button type="button" className="flex items-center gap-2">
              <TiMessages />
              <span className="text-sm">24</span>
            </button>
            <button type="button" className="flex items-center gap-2">
              <IoArrowRedoOutline />
            </button>
          </div>

          <div className="border-t">
            <textarea className="text-sm p-4" placeholder="Reply..." />
          </div>
        </div>

        {/* card */}
        <div className="border rounded p-5 pb-0 mb-5">
          <div className="flex items-center justify-between mb-4">
            <div className="grid grid-cols-[46px_1fr] gap-6">
              <div className="border rounded-full flex items-center justify-center p-1">
                <img
                  src="/temp/logo-unisearch.webp"
                  alt="Campaign unisearch"
                  title="Campaign unisearch"
                />
              </div>
              <div>
                <div className="font-semibold text-black">Unisearch</div>
                <div className="text-sm">Yestarday at 5:06 PM</div>
              </div>
            </div>
            <div className="">
              <button className="p-2">
                <ReactSVG src="/icons/dots.svg" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <img
              src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />
          </div>
          <div className="mb-5 text-sm">
            Outlines keep you honest. They stop you from indulging in poorly
            thought-out metaphors about driving and keep you focused on the
            overall structure of your post
          </div>

          <div className="flex items-center gap-4 mb-5">
            <button type="button" className="flex items-center gap-2">
              <FaRegHeart />
              <span className="text-sm">25</span>
            </button>
            <button type="button" className="flex items-center gap-2">
              <TiMessages />
              <span className="text-sm">24</span>
            </button>
            <button type="button" className="flex items-center gap-2">
              <IoArrowRedoOutline />
            </button>
          </div>

          <div className="border-t">
            <textarea className="text-sm p-4" placeholder="Reply..." />
          </div>
        </div>

        {/* card */}
        <div className="border rounded p-5 pb-0 mb-5">
          <div className="flex items-center justify-between mb-4">
            <div className="grid grid-cols-[46px_1fr] gap-6">
              <div className="border rounded-full flex items-center justify-center p-1">
                <img
                  src="/temp/logo-unisearch.webp"
                  alt="Campaign unisearch"
                  title="Campaign unisearch"
                />
              </div>
              <div>
                <div className="font-semibold text-black">Unisearch</div>
                <div className="text-sm">Yestarday at 5:06 PM</div>
              </div>
            </div>
            <div className="">
              <button className="p-2">
                <ReactSVG src="/icons/dots.svg" />
              </button>
            </div>
          </div>

          <div className="mb-5 text-sm">
            Outlines keep you honest. They stop you from indulging in poorly
            thought-out metaphors about driving and keep you focused on the
            overall structure of your post
          </div>

          <div className="flex items-center gap-4 mb-5">
            <button type="button" className="flex items-center gap-2">
              <FaRegHeart />
              <span className="text-sm">25</span>
            </button>
            <button type="button" className="flex items-center gap-2">
              <TiMessages />
              <span className="text-sm">24</span>
            </button>
            <button type="button" className="flex items-center gap-2">
              <IoArrowRedoOutline />
            </button>
          </div>

          <div className="reply">
            <ul>
              <li className="grid grid-cols-[42px_1fr] gap-3 mb-3">
                <div className="w-full h-[42px]">
                  <img
                    className="rounded w-full h-full object-cover"
                    src="https://xyz.ir/wp-content/uploads/2021/05/avatar.jpg.320x320px.jpg"
                    alt="user"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="mb-1">
                      <span className="font-medium text-black mr-2">
                        Shamim Khan
                      </span>
                      <span className="text-sm">1 day ago</span>
                    </div>
                    <button type="button" className="text-sm">
                      Reply
                    </button>
                  </div>
                  <div className="text-[#3F4254] text-sm">
                    They stop you from indulging in poorly thought-out metaphors
                    about driving and keep you focused on the overall
                  </div>
                </div>
              </li>
              <li className="grid grid-cols-[42px_1fr] gap-3 mb-3">
                <div className="w-full h-[42px]">
                  <img
                    className="rounded w-full h-full object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGa_Pf4i53Wxs_HrjmSgMEhE1Ac7rPhtFv2FpVCE0nHTHugg_iWgc9T5EqSManZ71nbw&usqp=CAU"
                    alt="user"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="mb-1">
                      <span className="font-medium text-black mr-2">
                        Mizan Khan
                      </span>
                      <span className="text-sm">1 day ago</span>
                    </div>
                    <button type="button" className="text-sm">
                      Reply
                    </button>
                  </div>
                  <div className="text-[#3F4254] text-sm">
                    They stop you from indulging in poorly thought-out metaphors
                    about driving and keep you focused on the overall
                  </div>
                </div>
              </li>
              <li className="grid grid-cols-[42px_1fr] gap-3 mb-3">
                <div className="w-full h-[42px]">
                  <img
                    className="rounded w-full h-full object-cover"
                    src="https://t3.ftcdn.net/jpg/02/11/41/90/360_F_211419019_XMsPr1uBdlJGKvlSRLZm5ZYzAEQvfFO2.jpg"
                    alt="user"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="mb-1">
                      <span className="font-medium text-black mr-2">
                        Sakib Rahman
                      </span>
                      <span className="text-sm">1 day ago</span>
                    </div>
                    <button type="button" className="text-sm">
                      Reply
                    </button>
                  </div>
                  <div className="text-[#3F4254] text-sm">
                    They stop you from indulging in poorly thought-out metaphors
                    about driving and keep you focused on the overall
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="border-t">
            <textarea className="text-sm p-4" placeholder="Reply..." />
          </div>
        </div>

        {/* card */}
        <div className="border rounded p-5 pb-0 mb-5">
          <div className="flex items-center justify-between mb-4">
            <div className="grid grid-cols-[46px_1fr] gap-6">
              <div className="border rounded-full flex items-center justify-center p-1">
                <img
                  src="/temp/logo-unisearch.webp"
                  alt="Campaign unisearch"
                  title="Campaign unisearch"
                />
              </div>
              <div>
                <div className="font-semibold text-black">Unisearch</div>
                <div className="text-sm">Yestarday at 5:06 PM</div>
              </div>
            </div>
            <div className="">
              <button className="p-2">
                <ReactSVG src="/icons/dots.svg" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <img
              src="https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div className="mb-5 text-sm">
            Outlines keep you honest. They stop you from indulging in poorly
            thought-out metaphors about driving and keep you focused on the
            overall structure of your post
          </div>

          <div className="flex items-center gap-4 mb-5">
            <button type="button" className="flex items-center gap-2">
              <FaRegHeart />
              <span className="text-sm">25</span>
            </button>
            <button type="button" className="flex items-center gap-2">
              <TiMessages />
              <span className="text-sm">24</span>
            </button>
            <button type="button" className="flex items-center gap-2">
              <IoArrowRedoOutline />
            </button>
          </div>

          <div className="reply">
            <ul>
              <li className="grid grid-cols-[42px_1fr] gap-3 mb-3">
                <div className="w-full h-[42px]">
                  <img
                    className="rounded w-full h-full object-cover"
                    src="https://xyz.ir/wp-content/uploads/2021/05/avatar.jpg.320x320px.jpg"
                    alt="user"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="mb-1">
                      <span className="font-medium text-black mr-2">
                        Shamim Khan
                      </span>
                      <span className="text-sm">1 day ago</span>
                    </div>
                    <button type="button" className="text-sm">
                      Reply
                    </button>
                  </div>
                  <div className="text-[#3F4254] text-sm">
                    They stop you from indulging in poorly thought-out metaphors
                    about driving and keep you focused on the overall
                  </div>
                </div>
              </li>
              <li className="grid grid-cols-[42px_1fr] gap-3 mb-3">
                <div className="w-full h-[42px]">
                  <img
                    className="rounded w-full h-full object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGa_Pf4i53Wxs_HrjmSgMEhE1Ac7rPhtFv2FpVCE0nHTHugg_iWgc9T5EqSManZ71nbw&usqp=CAU"
                    alt="user"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="mb-1">
                      <span className="font-medium text-black mr-2">
                        Mizan Khan
                      </span>
                      <span className="text-sm">1 day ago</span>
                    </div>
                    <button type="button" className="text-sm">
                      Reply
                    </button>
                  </div>
                  <div className="text-[#3F4254] text-sm">
                    They stop you from indulging in poorly thought-out metaphors
                    about driving and keep you focused on the overall
                  </div>
                </div>
              </li>
              <li className="grid grid-cols-[42px_1fr] gap-3 mb-3">
                <div className="w-full h-[42px]">
                  <img
                    className="rounded w-full h-full object-cover"
                    src="https://t3.ftcdn.net/jpg/02/11/41/90/360_F_211419019_XMsPr1uBdlJGKvlSRLZm5ZYzAEQvfFO2.jpg"
                    alt="user"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="mb-1">
                      <span className="font-medium text-black mr-2">
                        Sakib Rahman
                      </span>
                      <span className="text-sm">1 day ago</span>
                    </div>
                    <button type="button" className="text-sm">
                      Reply
                    </button>
                  </div>
                  <div className="text-[#3F4254] text-sm">
                    They stop you from indulging in poorly thought-out metaphors
                    about driving and keep you focused on the overall
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="border-t">
            <textarea className="text-sm p-4" placeholder="Reply..." />
          </div>
        </div>
      </div>

      {/* right */}
      <div>
        <div className="border rounded p-5 mb-5">
          <h4 className="mb-4">About Company</h4>
          <div className="mb-4">
            UniSearch harnesses over ten years of experience in international
            student recruitment within source markets and innovative AI-powered
            technology to streamline the study abroad process from the research
            stage down to arriving in the destination country and beyond.
            Through predictive analytics and algorithm-driven systems,
            all-inclusive platform.
          </div>

          <h4 className="mb-4">Catagory</h4>
          <div className="grid grid-cols-2 gap-5">
            <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
              <FaUniversity className="text-4xl" />
              <span>Study Abroad</span>
            </div>

            <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
              <BiBookReader className="text-4xl" />
              <span>Online Learning</span>
            </div>

            <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
              <GiReceiveMoney className="text-4xl" />
              <span>Funding & Finance</span>
            </div>

            <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
              <MdOutlineHealthAndSafety className="text-4xl" />
              <span>Overseas Student Health Cover</span>
            </div>
            <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
              <FaUniversity className="text-4xl" />
              <span>Study Abroad</span>
            </div>

            <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
              <BiBookReader className="text-4xl" />
              <span>Online Learning</span>
            </div>

            <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
              <GiReceiveMoney className="text-4xl" />
              <span>Funding & Finance</span>
            </div>

            <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
              <MdOutlineHealthAndSafety className="text-4xl" />
              <span>Overseas Student Health Cover</span>
            </div>
            <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
              <FaUniversity className="text-4xl" />
              <span>Study Abroad</span>
            </div>

            <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
              <BiBookReader className="text-4xl" />
              <span>Online Learning</span>
            </div>

            <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
              <GiReceiveMoney className="text-4xl" />
              <span>Funding & Finance</span>
            </div>

            <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
              <MdOutlineHealthAndSafety className="text-4xl" />
              <span>Overseas Student Health Cover</span>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="border rounded p-5 mb-5">
          <div className="flex items-center justify-between mb-4">
            <h4 className="mb-4">Product</h4>
            <Link to="/campaign/products" className="text-secondary">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://www.d2l.com/wp-content/uploads/2022/09/hero-d2l-brightspace-he.webp"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Education Product - How to Design for Best Usage
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://breadnbeyond.com/wp-content/uploads/2021/09/Education-Explainer-Video.jpg"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Create learning experiences with affordable Windows devices and
                get it's about what the key benefits are for the user.
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1674062130751-f8c23f3b4821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Product Education designs, themes, templates and
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1673579015800-81a951ca977d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Create learning experiences with affordable Windows devices and
                get it's about what the key benefits are for the user.
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1673591296410-1220ba8d6c0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Create learning experiences with affordable Windows devices and
                get it's about what the key benefits are for the user.
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1673874246309-de6d5fc34369?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Create learning experiences with affordable Windows devices and
                get it's about what the key benefits are for the user.
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1669681056200-31a8490a2bec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Create learning experiences with affordable Windows devices and
                get it's about what the key benefits are for the user.
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1673865587236-de597238c72d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Create learning experiences with affordable Windows devices and
                get it's about what the key benefits are for the user.
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1673555791730-0ee56e1b768b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Create learning experiences with affordable Windows devices and
                get it's about what the key benefits are for the user.
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1673766791276-5f46fd720021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Create learning experiences with affordable Windows devices and
                get it's about what the key benefits are for the user.
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFeed;
