import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import IncomeOverview from '../../components/Income/IncomeOverview';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import Modal from '../../components/layout/Modal';
import AddIncomeForm from '../../components/Income/AddIncomeForm';
import toast from 'react-hot-toast';
import IncomeList from '../../components/Income/IncomeList';

const Income = () => {

  const [incomeData, setIncomeData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });
  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);

  //Get all income details
  const getAllIncomeDetails = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosInstance.get(`${API_PATHS.INCOME.GET_ALL_INCOME}`);
      
      if (response.data) {
        setIncomeData(response.data);
      }
    } catch (error) {
      console.error('Something went wrong. Please try again', error);
    } finally {
      setLoading(false);
    }
  };

  //Handle add income
  const handleAddIncome = async (income) => {
    const {source, amount, date, icon} = income;
    
    //Validation Checks
    if (!source.trim()) {
      toast.error("Please enter income source");
      return;
    }
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    if (!date) {
      toast.error("Please select a date");
      return;
    }

    try {
      await axiosInstance.post(`${API_PATHS.INCOME.ADD_INCOME}`, {
        source,
        amount,
        date,
        icon
      });

      setOpenAddIncomeModal(false);
      toast.success("Income added successfully");
      getAllIncomeDetails();
    } catch (error) {
      console.error(
        "Error adding income. Please try again.",
        error.response?.data?.message || error.message
      );
    }
  };

  //Handle delete income
  const handleDeleteIncome = async (id) => {};

  //Download income data as CSV
  const downloadCSV = async () => {};

  useEffect(() => {
    getAllIncomeDetails();

    return () => {};
  }),[];

  return (
    <DashboardLayout activeMenu="Income">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div className="">
            <IncomeOverview
              transactions={incomeData}
              onAddIncome={() => setOpenAddIncomeModal(true)}
            />
          </div>

          <IncomeList
            transactions={incomeData}
            onDelete={(id) => {
              setOpenDeleteAlert({show: true, data: id});
            }}
            onDownload={downloadCSV}
          />
        </div>

        <Modal
          isOpen={openAddIncomeModal}
          onClose={() => setOpenAddIncomeModal(false)}
          title="Add Income"
        >
          <AddIncomeForm onAddIncome={handleAddIncome} />
        </Modal>
      </div>
    </DashboardLayout>
  )
}

export default Income