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
  Box,
  Heading,
} from "@chakra-ui/react";
import { FinancialPicture } from "../../types/types";

type Props = {
  info: FinancialPicture | {};
  setInfo: React.Dispatch<React.SetStateAction<FinancialPicture | {}>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

type FormInput = {
  cashnow: number;
  divsnow: number;
};

const Step2 = ({ info, setInfo, setStep }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>({ defaultValues: { ...info } });

  function onSubmit(values: FormInput) {
    if (info) setInfo({ ...info, ...values });
    setStep(3);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={2} spacingX="2rem" spacingY="1rem">
        <FormControl isInvalid={!!errors.cashnow}>
          <FormLabel htmlFor="cashnow">Current Cash</FormLabel>
          <Input
            bg="white"
            id="cashnow"
            type="number"
            {...register("cashnow", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.cashnow && errors.cashnow.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.divsnow}>
          <FormLabel htmlFor="divsnow">Dividents paid</FormLabel>
          <Input
            bg="white"
            id="divsnow"
            type="number"
            {...register("divsnow", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.divsnow && errors.divsnow.message}
          </FormErrorMessage>
        </FormControl>
      </SimpleGrid>
      <HStack w="100%" my={3}>
        <Spacer />
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit all info
        </Button>
      </HStack>
    </form>
  );
};

export default Step2;
