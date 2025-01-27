import React, { useEffect } from "react";
import Pagination from "../common/Pagination";
import CardWorkers from "./cards/CardWorkers";
import { useDispatch, useSelector } from "react-redux";
import { getAllTechncian } from "../../redux/actions/admin";
import {
  confirmMessage,
  errorMessage,
  successMessage,
} from "../../../utils/message";
import { UpgradeAccountService } from "../../services/adminService";
function Workers() {
  const users = useSelector((state) => state.admin.users);

  const pagination = useSelector((state) => state.admin.pagination);
  const dispatch = useDispatch(1);
  useEffect(() => {
    dispatch(getAllTechncian(1));
  }, [dispatch]);
  const onPageChange = async (page, currentPage) => {
    if (currentPage !== page) {
      dispatch(getAllJobs(page));
    }
  };
  const handleAdmin = async (id) => {
    try {
      const result = await confirmMessage("آیا برای ارتقا کاربر مطمئن هستید ؟");
      if (result) {
        const { status } = await UpgradeAccountService(id);
        if (status === 200) {
          successMessage(" کاربر با  با موفقیت ادمین شد !");
          dispatch(getAllJobs(1));
        }
      }
    } catch (error) {
      if (error.response.status === 406) {
        errorMessage("این اکانت قبلا ارتقا داده شده است!");
      } else errorMessage("مشکلی رخ داده است !");
    }
  };
  return (
    <>
      <div className=" card shadow mb-4 p-2">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">وضعیت تکنسین ها</h6>
        </div>
        <div className="">
          <div className="col-sm-12 col-md-6">
            <label>
              جستجو:
              <input
                type="search"
                className="form-control form-control-sm mr-1"
                placeholder=""
                aria-controls="dataTable"
              />
            </label>
          </div>
        </div>
        <div className="py-2">
          <div className="d-flex flex-wrap">
            {users.length === 0 && (
               <div className="alert alert-secondary w-100" role="alert">
               <i className="fa fa-exclamation-triangle ml-2"></i>
               اطلاعاتی وجود ندارد !
             </div>
            )}
            {users.map((item, index) => (
              <CardWorkers key={index} {...item} handleAdmin={handleAdmin} />
            ))}
          </div>
        </div>
      </div>
      <Pagination
        totalItems={pagination?.totalPages}
        pageSize={10}
        onPageChange={onPageChange}
      />
    </>
  );
}

export default Workers;
