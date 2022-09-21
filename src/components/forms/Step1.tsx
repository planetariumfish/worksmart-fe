import React from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  SimpleGrid,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { FinancialPicture } from "../../types/types";

type Props = {
  info: FinancialPicture | undefined;
  setInfo: React.Dispatch<React.SetStateAction<FinancialPicture | undefined>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

type FormInput = {
  netsales: number;
  cogs: number;
  sga: number;
  depreciation: number;
  intexp: number;
  taxexp: number;
  rnd: number;
};

const Step1 = ({ info, setInfo, setStep }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>();

  function onSubmit(values: FormInput) {
    if (info) setInfo({ ...info, ...values });
    setStep(2);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={2} spacingX="2rem" spacingY="1rem">
        <FormControl isInvalid={!!errors.netsales}>
          <FormLabel htmlFor="netsales">Net Sales (Current year)</FormLabel>
          <Input
            bg="white"
            id="netsales"
            type="number"
            {...register("netsales", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.netsales && errors.netsales.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.cogs}>
          <FormLabel htmlFor="cogs">Cost of Goods Sold</FormLabel>
          <Input
            bg="white"
            id="cogs"
            type="number"
            {...register("cogs", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.cogs && errors.cogs.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.sga}>
          <FormLabel htmlFor="sga">
            Sales, General, and Admin Expenses
          </FormLabel>
          <Input
            bg="white"
            id="sga"
            type="number"
            {...register("sga", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.sga && errors.sga.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.depreciation}>
          <FormLabel htmlFor="depreciation">Depreciation</FormLabel>
          <Input
            bg="white"
            id="depreciation"
            type="number"
            {...register("depreciation", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.depreciation && errors.depreciation.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.intexp}>
          <FormLabel htmlFor="intexp">Total Interest Expenses</FormLabel>
          <Input
            bg="white"
            id="intexp"
            type="number"
            {...register("intexp", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.intexp && errors.intexp.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.taxexp}>
          <FormLabel htmlFor="taxexp">Total Tax Expenses</FormLabel>
          <Input
            bg="white"
            id="taxexp"
            type="number"
            {...register("taxexp", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.taxexp && errors.taxexp.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.rnd}>
          <FormLabel htmlFor="rnd">
            Total Research and Development Expenditure
          </FormLabel>
          <Input
            bg="white"
            id="rnd"
            type="number"
            {...register("rnd", {
              required: "This is required. Input '0' if not applicable.",
            })}
          />
          <FormErrorMessage>
            {errors.rnd && errors.rnd.message}
          </FormErrorMessage>
        </FormControl>
      </SimpleGrid>
      <HStack w="100%">
        <Spacer />
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          To step 2
        </Button>
      </HStack>
    </form>
  );
};

export default Step1;
