docker run --rm ^
  -v %cd%/excel:/excel ^
  -v %cd%/output:/output ^
  --net host ^
  zl1030/luban-client:latest ^
  -h 127.0.0.1 ^
  -p 8899 ^
  -j cfg ^
  -- ^
  --define_file /excel/Defines/__root__.xml ^
  --input_data_dir /excel/Datas ^
  --output_code_dir /output/code ^
  --output_data_dir /output/data_json ^
  --service all ^
  --gen_types "data_json"

pause