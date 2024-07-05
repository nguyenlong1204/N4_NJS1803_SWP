package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.CreateImageDTO;
import com.diamond_shop.diamond_shop.dto.ValuationResultDTO;
import com.diamond_shop.diamond_shop.entity.*;
import com.diamond_shop.diamond_shop.pojo.DetailDiamondPojo;
import com.diamond_shop.diamond_shop.pojo.DiamondPojo;
import com.diamond_shop.diamond_shop.repository.*;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ValuationResultImpl implements ValuationResultService {
    private final ValuationResultRepository valuationResultRepository;
    private final ProcessResultRepository processResultRepository;
    private final ProcessRequestRepository processRequestRepository;
    private final ValuationRequestRepository valuationRequestRepository;
    private final ValuationResultImageRepository valuationResultImageRepository;

    public ValuationResultImpl(
            ValuationResultRepository valuationResultRepository,
            ProcessResultRepository processResultRepository,
            ProcessRequestRepository processRequestRepository,
            ValuationRequestRepository valuationRequestRepository,
            ValuationResultImageRepository valuationResultImageRepository) {
        this.valuationResultRepository = valuationResultRepository;
        this.processResultRepository = processResultRepository;
        this.processRequestRepository = processRequestRepository;
        this.valuationRequestRepository = valuationRequestRepository;
        this.valuationResultImageRepository = valuationResultImageRepository;

    }

    @Override
    public Optional<ValuationResultEntity> getValuationResultById(String id) {
        return valuationResultRepository.findValuationResultById(id);
    }

    @Override
    public Page<ValuationResultEntity> getValuationResultsByCustomerId(int page, int customerId) {
        int pageNumber = --page, pageSize = 5;
        return valuationResultRepository.getValuationResultsByCustomerId(PageRequest.of(pageNumber, pageSize), customerId);
    }

    @Override
    public Optional<ValuationResultEntity> getValuationResultByValuationRequestId(int valuationRequestId) {
        return valuationResultRepository.getValuationResultByValuationRequestId(valuationRequestId);
    }

    @Override
    public String valuateDiamond(String id, ValuationResultDTO valuationResultDTO) {
        Optional<ValuationResultEntity> valuationResult = valuationResultRepository.findById(id);
        if (valuationResult.isPresent()) {
            valuationResult.get().setOrigin(valuationResultDTO.getOrigin());
            valuationResult.get().setShape(valuationResultDTO.getShape());
            valuationResult.get().setCarat(valuationResultDTO.getCarat());
            valuationResult.get().setColor(valuationResultDTO.getColor());
            valuationResult.get().setCut(valuationResultDTO.getCut());
            valuationResult.get().setClarity(valuationResultDTO.getClarity());
            valuationResult.get().setSymmetry(valuationResultDTO.getSymmetry());
            valuationResult.get().setPolish(valuationResultDTO.getPolish());
            valuationResult.get().setFluorescence(valuationResultDTO.getFluorescence());
            valuationResult.get().setMeasurements(valuationResultDTO.getMeasurements());
            valuationResult.get().setDiamondTable(valuationResultDTO.getDiamondTable());
            valuationResult.get().setDepth(valuationResultDTO.getDepth());
            valuationResult.get().setLengthToWidthRatio(valuationResultDTO.getLengthToWidthRatio());
            valuationResult.get().setPrice(valuationResultDTO.getPrice());
            valuationResultRepository.save(valuationResult.get());
        } else return "Valuate failed!";

        ProcessResultEntity processResult = processResultRepository.findByValuationResultId(id);
        processResult.setStatus("Valuated");
        processResultRepository.save(processResult);

        Optional<ProcessRequestEntity> processRequest = processRequestRepository.findById(processResult.getValuationResultId().getValuationRequestId().getPendingRequestId().getProcessRequestEntity().getId());
        if (processRequest.isPresent()) {
            processRequest.get().setStatus("Valuated");
            processRequestRepository.save(processRequest.get());
            return "Valuate successful!";
        } else return "Valuate failed!";
    }

    @Override
    public String createValuationResult(ProcessRequestEntity processRequest) {
        Optional<ValuationRequestEntity> valuationRequest = valuationRequestRepository.findById(processRequest.getPendingRequestId().getValuationRequestEntity().getId());
        if (valuationRequest.isEmpty()) return "Could not find valuation request";
        Date createdDate = new Date();
        long randomId = (long) (Math.random() * Math.pow(10, 10));
        ValuationResultEntity valuationResultEntity = new ValuationResultEntity(Long.toString(randomId), valuationRequest.get(), createdDate, "", "", new BigDecimal(0), "", "", "", "", "", "", "", new BigDecimal(0), new BigDecimal(0), new BigDecimal(0), new BigDecimal(0));
        valuationResultRepository.save(valuationResultEntity);
        return "Assigned successfully!";
    }

    @Override
    public List<String> getValuationResultImage(String id) {
        return valuationResultImageRepository.findImageIdsByValuationResultId(id);
    }

    @Override
    public String createValuationResultImage(CreateImageDTO createImageDTO) {
        Optional<ValuationResultEntity> valuationResult = valuationResultRepository.findById(createImageDTO.getValuationResultId());
        if (valuationResult.isEmpty()) return "Could not find valuation result";
        ValuationResultImageEntity valuationResultImage = new ValuationResultImageEntity(createImageDTO.getId(), valuationResult.get());
        valuationResultImageRepository.save(valuationResultImage);
        return "Create image successful";
    }

    @Override
    public String deleteValuationResultImage(String imageId) {
        valuationResultImageRepository.deleteById(imageId);
        return "Delete successful";
    }


    @Override
    public List<DiamondPojo> crawlLabGrownDiamond(String shape) {
        List<DiamondPojo> diamonds = new ArrayList<>();
        if (shape.isEmpty()) {
            try {
                Document doc = Jsoup.connect("https://www.stonealgo.com/lab-grown-diamond-prices/").get();
                Elements elements = doc.select(".bg-white.overflow-hidden.border");

                for (Element element : elements) {
                    String name = element.select("a").text();
                    String price = element.select(".text-xl").text();
                    String priceChange = element.select(".text-xs .text-red-500").text();

                    if (priceChange.isEmpty()) {
                        priceChange = element.select(".text-xs .text-green-400").text();
                    }
                    String weight = element.select("dd").get(0).text();
                    String inventory = element.select("dd").get(1).text();
                    String inventoryChangeUp = "";
                    String inventoryChangeDown = "";
                    String imageUrl = element.select("img").attr("src");

                    // Extract inventory changes based on SVG elements
                    Elements inventoryChangeElements = element.select("dd.chart-gray-100 .flex.items-baseline");
                    for (Element changeElement : inventoryChangeElements) {
                        String svgPath = changeElement.select("svg path").attr("d");
                        String changeValue = changeElement.select("span").text();

                        // Check if the SVG path corresponds to an upward or downward arrow
                        if (svgPath.equals("M5 10l7-7m0 0l7 7m-7-7v18")) {
                            inventoryChangeUp = changeValue;
                        } else if (svgPath.equals("M19 14l-7 7m0 0l-7-7m7 7V3")) {
                            inventoryChangeDown = changeValue;
                        }
                    }

                    DiamondPojo diamond = new DiamondPojo(name, price, priceChange, weight, inventory, inventoryChangeUp, inventoryChangeDown, imageUrl);
                    diamonds.add(diamond);
                }

                Elements rows = doc.select("tr[data-table_link=true]");
                for (Element row : rows) {
                    String priceIndex = row.select("td a span").text();
                    String chart = row.select("td img").attr("data-src");

                    Elements tds = row.select("td");
                    String priceUsd = tds.get(2).text();
                    String range = tds.get(4).text();
                    String inv = tds.get(5).text();

                    String changeUp = "";
                    String changeDown = "";

                    for (Element td : tds) {
                        String changeValue = td.text();
                        String changeClass = td.className();

                        if (changeClass.contains("text-green-400")) {
                            changeUp = changeValue;
                        } else if (changeClass.contains("text-red-500")) {
                            changeDown = changeValue;
                        }
                    }

                    DiamondPojo diamond = new DiamondPojo(priceIndex, chart, priceUsd, changeUp, changeDown, range, inv);
                    diamonds.add(diamond);
                }

                String contentChange = doc.select("div.flex.flex-wrap.items-center.justify-start.text-lg.leading-6.font-bold.text-gray-900.mt-2 p").text();
                if (!contentChange.isEmpty()) {
                    DiamondPojo diamond = new DiamondPojo(contentChange);
                    diamonds.add(diamond);
                }

            } catch (IOException e) {
                System.out.println(e.getMessage());
            }
        } else {
            try {
                String url = "https://www.stonealgo.com/lab-grown-diamond-prices/?i=" + shape;
                Document doc = Jsoup.connect(url).get();
                Elements elements = doc.select(".bg-white.overflow-hidden.border");

                for (Element element : elements) {
                    String name = element.select("a").text();
                    String price = element.select(".text-xl").text();
                    String priceChange = element.select(".text-xs .text-red-500").text();

                    if (priceChange.isEmpty()) {
                        priceChange = element.select(".text-xs .text-green-400").text();
                    }
                    String weight = element.select("dd").get(0).text();
                    String inventory = element.select("dd").get(1).text();
                    String inventoryChangeUp = "";
                    String inventoryChangeDown = "";
                    String imageUrl = element.select("img").attr("src");

                    Elements inventoryChangeElements = element.select("dd.chart-gray-100 .flex.items-baseline");
                    for (Element changeElement : inventoryChangeElements) {
                        String svgPath = changeElement.select("svg path").attr("d");
                        String changeValue = changeElement.select("span").text();

                        if (svgPath.equals("M5 10l7-7m0 0l7 7m-7-7v18")) {
                            inventoryChangeUp = changeValue;
                        } else if (svgPath.equals("M19 14l-7 7m0 0l-7-7m7 7V3")) {
                            inventoryChangeDown = changeValue;
                        }
                    }

                    DiamondPojo diamond = new DiamondPojo(name, price, priceChange, weight, inventory, inventoryChangeUp, inventoryChangeDown, imageUrl);
                    diamonds.add(diamond);
                }

                Elements rows = doc.select("tr[data-table_link=true]");
                for (Element row : rows) {
                    String priceIndex = row.select("td a span").text();
                    String chart = row.select("td img").attr("data-src");

                    Elements tds = row.select("td");
                    String priceUsd = tds.get(2).text();
                    String range = tds.get(4).text();
                    String inv = tds.get(5).text();

                    String changeUp = "";
                    String changeDown = "";

                    for (Element td : tds) {
                        String changeValue = td.text();
                        String changeClass = td.className();

                        if (changeClass.contains("text-green-400")) {
                            changeUp = changeValue;
                        } else if (changeClass.contains("text-red-500")) {
                            changeDown = changeValue;
                        }
                    }

                    DiamondPojo diamond = new DiamondPojo(priceIndex, chart, priceUsd, changeUp, changeDown, range, inv);
                    diamonds.add(diamond);
                }
                String contentChange = doc.select("div.flex.flex-wrap.items-center.justify-start.text-lg.leading-6.font-bold.text-gray-900.mt-2 p").text();
                if (!contentChange.isEmpty()) {
                    DiamondPojo diamond = new DiamondPojo(contentChange);
                    diamonds.add(diamond);
                }

            } catch (IOException e) {
                System.out.println(e.getMessage());
            }
        }
        return diamonds;
    }

    @Override
    public List<DiamondPojo> crawlNaturalDiamond(String shape) {
        List<DiamondPojo> diamonds = new ArrayList<>();
        if (shape.isEmpty()) {
            try {
                Document doc = Jsoup.connect("https://www.stonealgo.com/diamond-prices/").get();
                Elements elements = doc.select(".bg-white.overflow-hidden.border");

                for (Element element : elements) {
                    String name = element.select("a").text();
                    String price = element.select(".text-xl").text();
                    String priceChange = element.select(".text-xs .text-red-500").text();

                    if (priceChange.isEmpty()) {
                        priceChange = element.select(".text-xs .text-green-400").text();
                    }
                    String weight = element.select("dd").get(0).text();
                    String inventory = element.select("dd").get(1).text();
                    String inventoryChangeUp = "";
                    String inventoryChangeDown = "";
                    String imageUrl = element.select("img").attr("src");

                    Elements inventoryChangeElements = element.select("dd.chart-gray-100 .flex.items-baseline");
                    for (Element changeElement : inventoryChangeElements) {
                        String svgPath = changeElement.select("svg path").attr("d");
                        String changeValue = changeElement.select("span").text();

                        if (svgPath.equals("M5 10l7-7m0 0l7 7m-7-7v18")) {
                            inventoryChangeUp = changeValue;
                        } else if (svgPath.equals("M19 14l-7 7m0 0l-7-7m7 7V3")) {
                            inventoryChangeDown = changeValue;
                        }
                    }

                    DiamondPojo diamond = new DiamondPojo(name, price, priceChange, weight, inventory, inventoryChangeUp, inventoryChangeDown, imageUrl);
                    diamonds.add(diamond);
                }

                Elements rows = doc.select("tr[data-table_link=true]");
                for (Element row : rows) {
                    String priceIndex = row.select("td a span").text();
                    String chart = row.select("td img").attr("data-src");

                    Elements tds = row.select("td");
                    String priceUsd = tds.get(2).text();
                    String range = tds.get(4).text();
                    String inv = tds.get(5).text();

                    String changeUp = "";
                    String changeDown = "";

                    for (Element td : tds) {
                        String changeValue = td.text();
                        String changeClass = td.className();

                        if (changeClass.contains("text-green-400")) {
                            changeUp = changeValue;
                        } else if (changeClass.contains("text-red-500")) {
                            changeDown = changeValue;
                        }
                    }

                    DiamondPojo diamond = new DiamondPojo(priceIndex, chart, priceUsd, changeUp, changeDown, range, inv);
                    diamonds.add(diamond);
                }

                String contentChange = doc.select("div.flex.flex-wrap.items-center.justify-start.text-lg.leading-6.font-bold.text-gray-900.mt-2 p").text();
                if (!contentChange.isEmpty()) {
                    DiamondPojo diamond = new DiamondPojo(contentChange);
                    diamonds.add(diamond);
                }

            } catch (IOException e) {
                System.out.println(e.getMessage());
            }
        } else {
            try {
                String url = "https://www.stonealgo.com/diamond-prices/?i=" + shape;
                Document doc = Jsoup.connect(url).get();
                Elements elements = doc.select(".bg-white.overflow-hidden.border");

                for (Element element : elements) {
                    String name = element.select("a").text();
                    String price = element.select(".text-xl").text();
                    String priceChange = element.select(".text-xs .text-red-500").text();

                    if (priceChange.isEmpty()) {
                        priceChange = element.select(".text-xs .text-green-400").text();
                    }
                    String weight = element.select("dd").get(0).text();
                    String inventory = element.select("dd").get(1).text();
                    String inventoryChangeUp = "";
                    String inventoryChangeDown = "";
                    String imageUrl = element.select("img").attr("src");

                    Elements inventoryChangeElements = element.select("dd.chart-gray-100 .flex.items-baseline");
                    for (Element changeElement : inventoryChangeElements) {
                        String svgPath = changeElement.select("svg path").attr("d");
                        String changeValue = changeElement.select("span").text();

                        if (svgPath.equals("M5 10l7-7m0 0l7 7m-7-7v18")) {
                            inventoryChangeUp = changeValue;
                        } else if (svgPath.equals("M19 14l-7 7m0 0l-7-7m7 7V3")) {
                            inventoryChangeDown = changeValue;
                        }
                    }

                    DiamondPojo diamond = new DiamondPojo(name, price, priceChange, weight, inventory, inventoryChangeUp, inventoryChangeDown, imageUrl);
                    diamonds.add(diamond);
                }

                Elements rows = doc.select("tr[data-table_link=true]");
                for (Element row : rows) {
                    String priceIndex = row.select("td a span").text();
                    String chart = row.select("td img").attr("data-src");

                    Elements tds = row.select("td");
                    String priceUsd = tds.get(2).text();
                    String range = tds.get(4).text();
                    String inv = tds.get(5).text();

                    String changeUp = "";
                    String changeDown = "";

                    for (Element td : tds) {
                        String changeValue = td.text();
                        String changeClass = td.className();

                        if (changeClass.contains("text-green-400")) {
                            changeUp = changeValue;
                        } else if (changeClass.contains("text-red-500")) {
                            changeDown = changeValue;
                        }
                    }

                    DiamondPojo diamond = new DiamondPojo(priceIndex, chart, priceUsd, changeUp, changeDown, range, inv);
                    diamonds.add(diamond);
                }
                String contentChange = doc.select("div.flex.flex-wrap.items-center.justify-start.text-lg.leading-6.font-bold.text-gray-900.mt-2 p").text();
                if (!contentChange.isEmpty()) {
                    DiamondPojo diamond = new DiamondPojo(contentChange);
                    diamonds.add(diamond);
                }
            } catch (IOException e) {
                System.out.println(e.getMessage());
            }
        }
        return diamonds;
    }

    @Override
    public List<DetailDiamondPojo> crawlDetailDiamond(String carat) {
        String url = "https://www.stonealgo.com/diamond-prices/" + carat + "-carat-diamond-prices/";
        List<DetailDiamondPojo> diamondPrices = new ArrayList<>();

        try {
            Document doc = Jsoup.connect(url).get();
            Elements xAxisElements = doc.select("apexcharts-xaxis-texts-g text > title");
            List<String> dates = new ArrayList<>();
            for (Element element : xAxisElements) {
                String date = element.text();
                if (!date.isEmpty()) {
                    dates.add(date);
                }
            }

            Elements yAxisElements = doc.select("apexcharts-yaxis-texts-g text > title");
            List<Double> prices = new ArrayList<>();
            for (Element element : yAxisElements) {
                String priceText = element.text().replace("%", "");
                if (!priceText.isEmpty()) {
                    try {
                        double price = Double.parseDouble(priceText);
                        prices.add(price);
                    } catch (NumberFormatException e) {
                        System.out.println(e.getMessage());
                    }
                }
            }

            for (int i = 0; i < Math.min(dates.size(), prices.size()); i++) {
                DetailDiamondPojo diamondPrice = new DetailDiamondPojo(prices.get(i), dates.get(i));
                diamondPrices.add(diamondPrice);
            }

        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        return diamondPrices;
    }
}